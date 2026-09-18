<script lang="ts">
  import { onMount } from 'svelte';
  import { site } from '$lib/content';
  import ResponsiveImage from '../ResponsiveImage.svelte';

  let hero: HTMLDivElement;
  let text: HTMLDivElement;
  let portraitSize = $state<number>();

  onMount(() => {
    const resizePortrait = () => {
      const container = hero.getBoundingClientRect();
      const content = text.getBoundingClientRect();
      const besideText = container.right - content.right;
      const belowText = container.bottom - content.bottom;

      // A bottom-right square clears the text if it fits beside OR below it.
      // Neither side may exceed the container's width or height.
      portraitSize = Math.max(0, Math.min(
        container.width,
        container.height,
        Math.max(besideText, belowText)
      ));
    };

    const observer = new ResizeObserver(resizePortrait);
    observer.observe(hero);
    observer.observe(text);
    resizePortrait();
    return () => observer.disconnect();
  });
</script>

<div class="home">
  <div class="hero" bind:this={hero}>
    <div class="text" bind:this={text}>
      <h1 aria-label={site.name}>
        {#each site.name.split(' ') as word}
          <span class="word" aria-hidden="true">{#each [...word] as letter}{#if letter === 'i'}<span class="i">i</span>{:else}{letter}{/if}{/each}</span>
        {/each}
      </h1>
      <p>{site.tagline}</p>
    </div>
    <div class="portrait-space" class:measured={portraitSize !== undefined}>
      <div class="portrait" style:width={portraitSize === undefined ? undefined : `${portraitSize}px`}
        style:height={portraitSize === undefined ? undefined : `${portraitSize}px`}>
        <ResponsiveImage src={site.portrait} alt={site.portraitAlt}
          sizes={portraitSize === undefined ? '90vw' : `${Math.ceil(portraitSize)}px`} eager />
      </div>
    </div>
  </div>
</div>

<style>
  .home { height: 100%; padding: 40px; box-sizing: border-box; }
  .hero { position: relative; height: 100%; display: flex; flex-direction: column; background: #000b; box-shadow: 0 0 20px 20px #000b; }
  .text { flex: none; width: fit-content; max-width: 100%; }
  h1 { font-size: min(64px, 16vw); line-height: 1.25; margin: 0; text-align: left; }
  .word { display: block; }
  p { color: color-mix(in srgb, var(--main-accent) 70%, white); margin: 0; max-width: 280px; font-size: clamp(18px, 3vw, 30px); line-height: 1.25; }
  /* Before measurement (and without JavaScript), fit a square below the text. */
  .portrait-space { flex: 1; min-height: 0; position: relative; container-type: size; }
  .portrait-space.measured { position: static; container-type: normal; }
  .portrait { position: absolute; right: 0; bottom: 0; width: min(100cqw, 100cqh); height: min(100cqw, 100cqh); aspect-ratio: 1; border-radius: 50%; overflow: hidden; }
  .portrait :global(picture) { display: block; width: 100%; height: 100%; }
  .portrait :global(img) { width: 100%; height: 100%; object-fit: cover; }
  .i { color: var(--main-accent); position: relative; }
  .i::before { content: 'ı'; position: absolute; color: var(--text-color); }
  @media (max-width: 700px) {
    .home { padding: 28px 20px; }
    p { max-width: 25ch; margin-top: 8px; }
  }
  @media (max-height: 540px) and (min-width: 701px) {
    .home { padding: 20px; }
    h1 { font-size: 44px; }
    p { font-size: 20px; }
  }
</style>
