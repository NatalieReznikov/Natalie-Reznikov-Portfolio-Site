<script lang="ts">
  import type { Person } from '$lib/content/schema';
  import ResponsiveImage from './ResponsiveImage.svelte';
  let { person }: { person: Person } = $props();
</script>

<article class="member-card" aria-labelledby={`name-${person.id}`}>
  <div class="photo"><ResponsiveImage src={person.photo} alt={person.name} sizes="(min-width: 1053px) 18vw, 36vw" /></div>
  <div class="content">
    <h2 id={`name-${person.id}`}>{person.name}</h2>
    <p>{person.bio}</p>
  </div>
  <div class="research"><ResponsiveImage src={person.researchImage} alt={person.researchAlt} sizes="(min-width: 1053px) 42vw, 90vw" /></div>
</article>

<style>
  .member-card { display: grid; grid-template-columns: 1fr 1.54fr; grid-template-areas: 'photo content' 'research research'; gap: 0.5em; align-items: start; }
  .photo { grid-area: photo; }
  .content { grid-area: content; font-size: clamp(14px, 1.5vw, 24px); }
  h2 { font-size: 1.7em; margin: 0 0 0.4em; text-align: left; }
  p { margin: 0; line-height: 1.5; }
  .research { grid-area: research; }
  @media (min-width: 1053px) {
    .member-card { grid-template-columns: 1fr 2fr 2.363fr; grid-template-areas: 'photo content research'; }
    .content { font-size: 0.6em; }
  }
  @media (min-width: 1638px) { .content { font-size: 0.8em; } }
</style>
