import homeIcon from '$lib/icons/home.svg?raw';
import bioIcon from '$lib/icons/book-open.svg?raw';
import publicationsIcon from '$lib/icons/document_list.svg?raw';
import artIcon from '$lib/icons/picture.svg?raw';
import labIcon from '$lib/icons/flask.svg?raw';
import contactIcon from '$lib/icons/info-circle.svg?raw';

export const sections = [
  { id: 'home', path: '/', label: 'Home', icon: homeIcon },
  { id: 'bio', path: '/bio/', label: 'Bio', icon: bioIcon },
  { id: 'publications', path: '/publications/', label: 'Publications', icon: publicationsIcon },
  { id: 'cover-art', path: '/cover-art/', label: 'Cover Art', icon: artIcon },
  { id: 'lab', path: '/lab/', label: 'Lab', icon: labIcon },
  { id: 'contact', path: '/contact/', label: 'Contact Info', icon: contactIcon }
] as const;

export type SectionId = typeof sections[number]['id'];
export function sectionById(id: string) { return sections.find((section) => section.id === id); }
