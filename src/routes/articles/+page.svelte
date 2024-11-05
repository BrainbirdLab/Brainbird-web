<script lang="ts">
    import Articles from "./Articles.svelte";
    let { data } = $props();
</script>

<!-- HTML -->
{#if data.feed}
    <Articles data={data} />
{/if}