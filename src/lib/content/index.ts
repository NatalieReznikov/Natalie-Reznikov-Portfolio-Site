import publicationsJson from './publications.json';
import peopleJson from './people.json';
import coversJson from './covers.json';
import biographyJson from './biography.json';
import siteJson from './site.json';
import { contentSchema } from './schema';

const content = contentSchema.parse({
  publications: publicationsJson, people: peopleJson, covers: coversJson,
  biography: biographyJson, site: siteJson
});

export const { publications, biography, site } = content;
export const people = [...content.people].sort((a, b) => a.order - b.order);
export const covers = [...content.covers].sort((a, b) => b.order - a.order);
