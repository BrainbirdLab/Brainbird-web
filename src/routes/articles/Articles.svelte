<script lang="ts">
    import "$lib/styles/articles.scss";
    import "highlight.js/styles/atom-one-dark.min.css";

    import { fly } from "svelte/transition";
    import { tick } from "svelte";
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import { goto, pushState } from "$app/navigation";
    import type Parser from "rss-parser";

    type DataType = {
        feed: ({ [key: string]: any } & Parser.Item)[];
    };

    interface ArticlesProps {
        data: DataType;
    }

    let { data }: ArticlesProps = $props();

    let currentContentIndex: number = $state(1);
    let categories = $derived(data.feed[Number(currentContentIndex - 1)]?.categories || []);

    hljs.configure({
        languages: [
            "c",
            "cpp",
            "lua",
            "python",
            "java",
            "rust",
            "yml",
            "json",
            "bash",
            "php",
            "go",
            "javascript",
            "typescript",
            "html",
        ],
    });

    async function highlight() {
        await tick();

        document.querySelectorAll("pre").forEach((block) => {
            const code = document.createElement("code");
            code.innerHTML =
                block.innerHTML.replace(/<br>/g, "\n") || "Not found";
            block.innerHTML = "";
            block.appendChild(code);
        });

        hljs.highlightAll();
    }

    function getTitle(url: string) {
        const urlParts = url.split('/');
        let title = urlParts[urlParts.length - 1]
        .split("?source")[0]
        .split("-")
        .slice(0, -1)
        .join("-");
        return title;
    }

    function parseTitleFromUrl(url: string | undefined) {
        if (!url) {
            return "";
        }
        return getTitle(url);
    }

    let loaded = $state(false);

    onMount(() => {
        let postTitle = window.location.hash?.replace("#/", "") || "";

        if (postTitle) {
            const index = data.feed?.findIndex((item) => {
                return parseTitleFromUrl(item.link) === postTitle;
            });
            if (index >= 0) {
                currentContentIndex = index + 1;
            } else {
                currentContentIndex = 1;
                const url = `/articles/#/${parseTitleFromUrl(data.feed[currentContentIndex - 1]?.link)}`;
                //replaceState(url, { contact: false, messageSent: false });
                goto(url, { replaceState: true });
            }
        } else {
            currentContentIndex = 1;
            const url = `/articles/#/${parseTitleFromUrl(data.feed[currentContentIndex - 1]?.link)}`;
            //replaceState(url, { contact: false, messageSent: false });
            goto(url, { replaceState: true });
        }

        highlight();

        loaded = true;
    });

    function readPost(node: HTMLElement) {
        node.onclick = (e) => {
            let target = e.target as HTMLElement;
            //console.log(target);
            if (target.closest(".post-container")) {
                const id = target
                    .closest(".post-container")
                    ?.getAttribute("data-id");

                if (!id) {
                    return;
                }

                currentContentIndex = (Number(id) || 0) + 1;

                //replace all spaces with - and make it lowercase
                const title = data.feed[currentContentIndex - 1]?.link || "";

                if (title) {
                    const url = `/#/${parseTitleFromUrl(title)}`;
                    pushState(url, {
                        contact: false,
                        messageFeedback: {
                            show: false,
                            message: "",
                            title: "",
                        },
                    });
                    document.querySelector(".post")?.scrollIntoView(); // keep the top padding for the navbar
                    //scroll to top
                    highlight();
                }
            }
        };
        return {
            destroy() {
                node.onclick = null;
            },
        };
    }

    function makeThumLink(data: string): string {
    
        const div = document.createElement("div");
        div.innerHTML = data;

        const newDiv = document.createElement("div");

        const textDiv = document.createElement("div");
        textDiv.innerText = div.innerText.substring(0, 200) + "...";
        textDiv.classList.add("thumb-text-div");
        newDiv.appendChild(textDiv);
        return newDiv.innerHTML;
    }

</script>

<svelte:head>
    <title>Brainbird | Articles</title>
</svelte:head>

{#if loaded}
<div class="shrink-wrapper">
    <div class="posts-container">
        <div class="post">
            <div class="head" in:fly|global={{ x: -10 }}>
                <div class="article-title" title="Copy link to share">
                    <a href={data.feed[currentContentIndex - 1]?.link} target="_blank">
                        {data.feed[currentContentIndex - 1]?.title}
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
                <div class="date">
                    {data.feed[0]?.creator} • {new Date(
                        data.feed[currentContentIndex - 1]?.pubDate || "",
                    ).toLocaleString("en", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </div>
            </div>
            <div class="article-content" in:fly|global={{ y: 10 }}>
                {@html data.feed[currentContentIndex - 1]["content:encoded"]}
            </div>
            {#if data.feed && data.feed[currentContentIndex - 1] && data.feed[currentContentIndex - 1]?.categories}
                <div class="flex row wrap monospace gap pad-top-10 left">
                    {#each categories as category}
                        <span class="tag">#{category}</span>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>

{#if data.feed.length > 1}
    <section class="morepostcontainer">
        <div
            class="morePosts shrink-wrapper"
            use:readPost
            in:fly|global={{ x: 10 }}
        >
            <div class="title">
                Read other stories <i class="fa-solid fa-bookmark"></i>
            <div class="posts">
                {#each data.feed as item, i (item)}
                    {#if currentContentIndex - 1 != i}
                        <div class="post-container block-q" data-id={i}>
                            <div class="head">
                                <div class="title">{item?.title}</div>
                                <div class="date">
                                    {item?.creator} · {new Date(
                                        item?.pubDate || "",
                                    ).toLocaleString("en", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                            <div class="thumbnail">
                                {@html makeThumLink(
                                    item["content:encoded"],
                                )}
                            </div>
                            {#if item?.categories}
                                <div
                                    class="flex row wrap monospace gap pad-top-10"
                                >
                                    {#each item.categories as category}
                                        <span class="tag small"
                                            >#{category}</span
                                        >
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </section>
{/if}
{/if}

<style lang="scss">
    .head {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 100%;
    }
    .article-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 10px;
        a {
            color: inherit;
        }
    }

    .posts-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        .date {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            padding: 10px;
            background: var(--dark-color-hover);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .article-content {
            font-size: 0.9rem;
            background: #ffffff;
            color: rgb(0, 0, 0);
            width: 100%;
            text-align: left;
            padding: 10px 5% 5%;
            font-family: sans-serif;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            :global(*) {
                text-align: left;
                font-family: sans-serif;
            }
        }
    }
</style>
