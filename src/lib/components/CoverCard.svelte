<script lang="ts">
  import type { Cover } from '$lib/content/schema';
  import ResponsiveImage from './ResponsiveImage.svelte';
  import chevron from '$lib/icons/chevron_up.svg?raw';
  let { cover }: { cover: Cover } = $props();
  let expanded = $state(false);
  let hovered = $state(false);
  const visible = $derived(expanded || hovered);
</script>

<article class="cover" class:expanded={visible}
  onpointerenter={(event) => { if (event.pointerType === 'mouse') hovered = true; }}
  onpointerleave={() => hovered = false}>
  <ResponsiveImage src={cover.image} alt={cover.alt} sizes="(min-width: 1053px) 24vw, (min-width: 600px) 45vw, 90vw" />
  <div class="description">
    <button aria-label={`Caption: ${cover.title}`} aria-expanded={visible} aria-controls={`caption-${cover.id}`}
      onclick={() => { expanded = !expanded; hovered = false; }}>
      <span aria-hidden="true">{@html chevron}</span>
    </button>
    <div class="caption" id={`caption-${cover.id}`}>{@html cover.captionHtml}</div>
  </div>
</article>

<style>
  .cover { position: relative; overflow: hidden; width: 100%; }
  .description { position: absolute; bottom: 0; width: 100%; max-height: 100%; display: flex; flex-direction: column; transform: translateY(calc(100% - 32px)); transition: transform 300ms; font-size: max(14px, 0.5rem); background: linear-gradient(to bottom, #282c34ad, var(--main-color) 32px); }
  button { display: grid; place-items: center; flex: none; width: 100%; height: 32px; padding: 0; border: 0; background: none; color: var(--main-accent); cursor: pointer; }
  button span { display: block; width: 24px; height: 24px; }
  button :global(svg) { width: 100%; height: 100%; transition: transform 300ms; }
  .expanded button :global(svg) { transform: rotate(180deg); }
  .caption { padding: 0 10px 12px; min-height: 0; overflow-y: auto; visibility: hidden; }
  .expanded .description { transform: translateY(0); }
  .expanded .caption { visibility: visible; }
</style>
