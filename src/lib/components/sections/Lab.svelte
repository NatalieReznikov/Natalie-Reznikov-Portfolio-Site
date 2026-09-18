<script lang="ts">
  import { people } from '$lib/content';
  import MemberCard from '../MemberCard.svelte';
  const members = people.filter((person) => person.status === 'current');
  const alumni = people.filter((person) => person.status === 'alumni');
</script>

<div class="lab">
  <h1 class="visually-hidden">Lab</h1>
  {#each members as person (person.id)}<MemberCard {person} />{/each}
  {#if alumni.length}
    <div class="break"><h2>Alumni</h2><hr /></div>
    {#each alumni as person (person.id)}<MemberCard {person} />{/each}
  {/if}
</div>

<style>
  .lab { display: grid; gap: 2em; padding: 10px 20px 32px; }
  .break h2 { font-size: 3em; margin: 0; }
  hr { width: 100%; }
  @media (max-width: 520px) { .lab { padding: 10px 0 24px; } }
</style>
