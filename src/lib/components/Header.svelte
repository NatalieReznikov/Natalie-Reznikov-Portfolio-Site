<script lang="ts">
  import { base } from '$app/paths';
  import { sections, type SectionId } from '$lib/sections';
  let { active }: { active: SectionId } = $props();
</script>

<header>
  <nav aria-label="Main navigation">
    <svg class="edge" viewBox="0 0 2 3" aria-hidden="true"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" /></svg>
    <ul>
      {#each sections as section (section.id)}
        <li class:active={active === section.id}>
          <a href={`${base}${section.path}`} aria-label={section.label}
            aria-current={active === section.id ? 'page' : undefined}
            data-sveltekit-noscroll data-sveltekit-keepfocus>
            <span class="label">{section.label}</span>
            <span class="icon" aria-hidden="true">{@html section.icon}</span>
          </a>
        </li>
      {/each}
    </ul>
    <svg class="edge" viewBox="0 0 2 3" aria-hidden="true"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" /></svg>
  </nav>
</header>

<style>
  header { display: flex; justify-content: center; flex: none; position: relative; z-index: 2; }
  nav { display: flex; justify-content: center; height: max-content; font-size: 0.6rem; }
  .edge { display: block; width: 2em; height: 4em; scale: calc(4 / 3); fill: var(--main-color); }
  ul { position: relative; display: flex; justify-content: center; align-items: center; list-style: none; padding: 0; margin: 0; background: var(--main-color); height: 4em; }
  li { position: relative; padding: 0.5em; }
  li::after { content: ''; display: block; width: 0; height: 2px; margin: 3px 50%; background: var(--main-accent); transition: width 250ms, margin 250ms; }
  li.active::after { width: 100%; margin: 3px 0; }
  nav a, nav a:visited { display: flex; height: max-content; align-items: center; color: var(--text-color); font-weight: 400; font-size: 1.875em; text-decoration: none; white-space: nowrap; transition: color 200ms linear; }
  nav a:hover { color: var(--main-accent); text-decoration: none; }
  .icon { display: none; }
  @media (max-width: 910px) {
    .label { display: none; }
    .icon { display: flex; width: 1.2em; height: 1.2em; }
    .icon :global(svg) { width: 100%; height: 100%; stroke-width: 2px; }
    a { padding: 0.15em; }
    li { padding: 0.35em; }
  }
</style>
