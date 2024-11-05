<script lang="ts">

    import "$lib/styles/global.scss";
    import "$lib/fontawesome/css/all.min.css";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

</script>

{@render children?.()}