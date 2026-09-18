<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import Swiper from 'swiper';
  import 'swiper/css';
  import { sections, type SectionId } from '$lib/sections';
  import Home from './sections/Home.svelte';
  import Bio from './sections/Bio.svelte';
  import Publications from './sections/Publications.svelte';
  import Art from './sections/Art.svelte';
  import Lab from './sections/Lab.svelte';
  import Contact from './sections/Contact.svelte';

  let { section }: { section: SectionId } = $props();
  const components = { home: Home, bio: Bio, publications: Publications, 'cover-art': Art, lab: Lab, contact: Contact };
  let container: HTMLDivElement;
  let swiper: Swiper | undefined;
  let ready = $state(false);
  let reducedMotion = $state(false);
  const index = $derived(sections.findIndex((item) => item.id === section));

  function navigateTo(index: number) {
    const next = sections[index];
    if (!next || next.id === section) return;
    // The router owns history. Swiper's own history module is deliberately disabled.
    void goto(`${base}${next.path}`, { noScroll: true, keepFocus: true });
  }

  function handleKeys(event: KeyboardEvent) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      navigateTo(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  }

  onMount(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      reducedMotion = media.matches;
      if (swiper) swiper.params.speed = reducedMotion ? 0 : 500;
    };
    updateMotion();
    media.addEventListener('change', updateMotion);
    swiper = new Swiper(container, {
      initialSlide: index,
      speed: reducedMotion ? 0 : 500,
      spaceBetween: 50,
      threshold: 12,
      touchAngle: 35,
      touchStartPreventDefault: false,
      edgeSwipeDetection: true,
      grabCursor: true
    });
    swiper.on('slideChange', () => navigateTo(swiper!.activeIndex));
    ready = true;
    return () => {
      media.removeEventListener('change', updateMotion);
      swiper?.destroy(true, true);
      swiper = undefined;
    };
  });

  $effect(() => {
    if (!ready || !swiper) return;
    // Suppress slide callbacks for route-driven changes, including Back/Forward.
    // This prevents an animation from creating a second history entry.
    if (swiper.activeIndex !== index) swiper.slideTo(index, reducedMotion ? 0 : 500, false);
    const focused = document.activeElement as HTMLElement | null;
    const outgoing = focused?.closest<HTMLElement>('[data-section]');
    if (outgoing && outgoing.dataset.section !== section) container.focus({ preventScroll: true });
  });
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions (The carousel region supports scoped arrow-key navigation.) -->
<div class="swiper" bind:this={container} role="region" aria-roledescription="carousel"
  aria-label="Website sections" tabindex="0" onkeydown={handleKeys} data-ready={ready}>
  <div class="swiper-wrapper">
    {#each sections as item (item.id)}
      {@const Component = components[item.id]}
      <section class="swiper-slide" class:is-current={section === item.id}
        data-section={item.id} aria-label={item.label} aria-roledescription="slide"
        aria-hidden={section !== item.id} inert={section !== item.id}>
        <div class="section-scroll" data-scroll-section={item.id}>
          <Component />
        </div>
      </section>
    {/each}
  </div>
</div>
<p class="visually-hidden" aria-live="polite" aria-atomic="true">{sections[index].label}</p>

<style>
  .swiper { width: 100%; height: 100%; min-height: 0; color: var(--text-color); }
  .swiper-slide { width: 100%; height: 100%; min-width: 0; overflow: hidden; }
  .section-scroll { height: 100%; overflow-y: auto; overflow-x: hidden; overscroll-behavior-y: contain; scrollbar-gutter: stable; }
  .swiper-slide[data-section='home'] .section-scroll { scrollbar-gutter: auto; }
  /* Static HTML and the first paint show the requested section before Swiper starts. */
  .swiper:not(:global(.swiper-initialized)) .swiper-slide:not(.is-current) { display: none; }
  .swiper:focus-visible { outline-offset: -3px; }
</style>
