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
<div class="nav-links">
    <a href="#services" onclick={() => goto("/#services")}>Services</a>
    <a href="#articles" onclick={() => goto("/#acticles")}>Articles</a>
    <a href="#about" onclick={() => goto("/#about")}>About</a>
    <a href="#contact" onclick={() => goto("/#contact")}>Contact</a>
</div>
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
  
      .nav-links {
        a {
          margin-left: 20px;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
            color: var(--text-color);
        &:hover {
            color: var(--accent-color);
            text-decoration: underline;
          }
        }
      }
    }
</style>