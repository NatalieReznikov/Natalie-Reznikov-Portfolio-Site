<script lang="ts">
  import { biography } from '$lib/content';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  const currentYear = new Date().getFullYear();
</script>

<h1 class="visually-hidden">Bio</h1>
<ol class="timeline">
  {#each biography as position (position.id)}
    {@const duration = (position.to ?? currentYear) - position.from}
    <li>
      <div class="dates"><p>{position.from}<br />–<br />{position.to ?? 'Present Time'}<br /><em>{duration} {duration === 1 ? 'year' : 'years'}</em></p></div>
      <div class="separator"><div class="dot"><ResponsiveImage src={position.image} alt={position.imageAlt} sizes="45px" /></div><div class="connector"></div></div>
      <div class="content">
        <h2>{position.institution}</h2>
        <p class="role">{@html position.roleHtml}</p>
        <div class="description">{@html position.descriptionHtml}</div>
      </div>
    </li>
  {/each}
</ol>

<style>
  .timeline { padding: 6px 16px 32px; margin: 1em 0; }
  li { list-style: none; display: grid; grid-template-columns: minmax(0, 1fr) 57px minmax(0, 1fr); min-height: 70px; }
  .dates, .content { margin: 6px 16px; min-width: 0; }
  .dates { text-align: right; grid-column: 1; grid-row: 1; }
  .dates p { margin: 1em 0; }
  em { color: var(--main-accent); }
  .separator { grid-column: 2; grid-row: 1; display: flex; flex-direction: column; align-items: center; }
  .dot { display: grid; place-items: center; flex: none; width: 45px; height: 45px; padding: 6px; margin: 11.5px 0; background: white; border-radius: 50%; }
  .dot :global(img) { max-height: 45px; }
  .connector { flex: 1; width: 2px; background: #bdbdbd; }
  .content { grid-column: 3; grid-row: 1; }
  h2 { padding: 0.5em; background: var(--main-accent); margin: 0; color: black; font-size: 1.3em; }
  .role { padding: 0.5em; background: var(--secondary-accent); margin: 0; line-height: normal; }
  .description { padding: 0.5em; background: var(--main-color); line-height: 1.5; }
  li:nth-child(even) .content { grid-column: 1; text-align: right; }
  li:nth-child(even) .dates { grid-column: 3; text-align: left; }
  @media (max-width: 530px) {
    .timeline { padding: 0 0 24px; margin: 16px 0; font-size: 16px; }
    li { grid-template-columns: 44px minmax(0, 1fr); }
    .separator { grid-column: 1; grid-row: 1 / 3; }
    .dot { width: 28px; height: 28px; padding: 5px; }
    .dot :global(img) { max-height: 28px; }
    .dates, li:nth-child(even) .dates { grid-column: 2; grid-row: 1; text-align: left; margin: 0 10px; }
    .dates p { margin: 0 0 8px; }
    .dates br { display: none; }
    .dates em { margin-left: 8px; }
    .content, li:nth-child(even) .content { grid-column: 2; grid-row: 2; text-align: left; margin: 0 10px 24px; }
  }
</style>
