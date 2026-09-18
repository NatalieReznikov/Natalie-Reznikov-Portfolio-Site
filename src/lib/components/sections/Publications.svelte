<script lang="ts">
  import { publications } from '$lib/content';
</script>

<div class="publications">
  <h1 class="visually-hidden">Publications</h1>
  {#each publications as publication, i (publication.id)}
    {@const link = publication.doi ? `https://doi.org/${publication.doi}` : publication.url}
    <article id={publication.id}>
      <p class="authors">{i + 1}. {publication.authors}</p>
      <h2>{publication.title}</h2>
      <p>{publication.citation}{#if link}{' '}<a href={link}>{link}</a>{' '}{/if}{#if publication.status === 'in-press'}{' '}(in press){/if}{#if publication.notes}{' '}{publication.notes}{/if}</p>
    </article>
  {/each}
</div>

<style>
  .publications { padding: 0 8px 32px 0; }
  .authors, h2 { font-size: 1.5em; font-weight: 400; margin: 0.5em 0; }
  h2 { font-style: italic; }
  p { margin: 0.5em 0; }
  a { overflow-wrap: anywhere; }
</style>
