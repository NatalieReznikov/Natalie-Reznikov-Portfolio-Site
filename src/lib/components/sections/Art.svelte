<script lang="ts">
  import { covers } from '$lib/content';
  import CoverCard from '../CoverCard.svelte';
</script>

<h1 class="visually-hidden">Cover Art</h1>
<div class="gallery">{#each covers as cover (cover.id)}<CoverCard {cover} />{/each}</div>

<style>
  .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, max(30vh, 20vw)), 1fr)); gap: 20px; padding: 10px 10px 32px; align-items: end; }
</style>
