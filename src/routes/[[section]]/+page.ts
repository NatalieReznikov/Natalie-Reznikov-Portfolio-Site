import { error } from '@sveltejs/kit';
import { sections, sectionById } from '$lib/sections';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => sections.map((section) => ({
  section: section.id === 'home' ? '' : section.id
}));

export const load: PageLoad = ({ params }) => {
  const section = sectionById(params.section || 'home');
  if (!section || params.section === 'home') error(404, 'Section not found');
  return { section: section.id };
};
