<script lang="ts">
  import SectionCarousel from '$lib/components/SectionCarousel.svelte';
  import { site } from '$lib/content';
  import { sectionById } from '$lib/sections';
  import { page } from '$app/state';
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  const section = $derived(sectionById(data.section)!);
</script>

<svelte:head>
  <title>{section.id === 'home' ? site.name : `${section.label} — ${site.name}`}</title>
  <meta name="description" content={site.description} />
  <link rel="canonical" href={new URL(page.url.pathname, site.url).href} />
</svelte:head>

<SectionCarousel section={data.section} />
