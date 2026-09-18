<script lang="ts">
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles.css';
  import background from '$lib/assets/background_tile.png?w=640&enhanced';
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>

<div class="app" style:background-image={`url(${background.img.src})`}>
  <a class="skip-link" href="#main">Skip to content</a>
  <Header active={page.data.section ?? 'home'} />
  <main id="main">{@render children()}</main>
</div>

<style>
  .app { display: flex; flex-direction: column; height: 100vh; height: 100dvh; background-color: var(--main-color); background-repeat: repeat; background-size: 15%; }
  main { flex: 1; min-height: 0; width: 100%; padding: 0 3%; margin: 0 auto; box-sizing: border-box; }
  .skip-link { position: absolute; top: -100px; left: 12px; z-index: 5; background: var(--main-color); padding: 8px 12px; }
  .skip-link:focus { top: 8px; }
</style>
