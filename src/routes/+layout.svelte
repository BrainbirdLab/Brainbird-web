<script lang="ts">

    import "$lib/styles/global.scss";
    import "$lib/fontawesome/css/all.min.css";
    import { goto } from "$app/navigation";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

</script>

<nav>
<div class="logo">BrainbirdLab</div>
</nav>

{@render children?.()}

<style lang="scss">
     nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      width: 100%;
      
      .logo {
        font-size: 1.5em;
        font-weight: 700;
        color: var(--accent-color);
      }
    }
</style>