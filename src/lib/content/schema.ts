import { z } from 'zod';

const text = z.string().trim().min(1);
const id = text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const year = z.number().int().min(1900).max(2200);
const image = text.regex(/\.(png|jpe?g|webp)$/i).refine(
  (value) => !value.startsWith('/') && !value.split('/').includes('..'),
  'Use a path relative to src/lib/assets, without ..'
);
const url = z.url().refine((value) => /^https?:\/\//.test(value), 'Use an HTTP or HTTPS URL');

export const publicationSchema = z.strictObject({
  id,
  authors: text,
  title: text,
  year: year.nullable(),
  citation: text,
  doi: text.regex(/^10\.\d{4,9}\/\S+$/).optional(),
  url: url.optional(),
  status: z.enum(['published', 'in-press']),
  notes: z.string()
}).refine((item) => !(item.doi && item.url), 'Provide only one of doi or url');

export const personSchema = z.strictObject({
  id, name: text, bio: text,
  status: z.enum(['current', 'alumni']),
  order: z.number().int(),
  photo: image, researchImage: image, researchAlt: text
});

export const coverSchema = z.strictObject({
  id, title: text, image, alt: text, captionHtml: text, order: z.number().int()
});

export const positionSchema = z.strictObject({
  id, from: year, to: year.nullable(), institution: text,
  roleHtml: text, descriptionHtml: text, image, imageAlt: text
}).refine((item) => item.to === null || item.to >= item.from, 'End year must follow start year');

export const siteSchema = z.strictObject({
  name: text, tagline: text, description: text, url,
  portrait: image, portraitAlt: text,
  contact: z.strictObject({ teachingOffice: text, researchLab: text, email: z.email() }),
  credit: z.strictObject({ name: text, role: text, github: url, email: z.email() })
});

export const contentSchema = z.strictObject({
  publications: z.array(publicationSchema).min(1),
  people: z.array(personSchema).min(1),
  covers: z.array(coverSchema).min(1),
  biography: z.array(positionSchema).min(1),
  site: siteSchema
}).superRefine((content, ctx) => {
  for (const collection of ['publications', 'people', 'covers', 'biography'] as const) {
    const ids = new Set<string>();
    content[collection].forEach((item, index) => {
      if (ids.has(item.id)) ctx.addIssue({ code: 'custom', path: [collection, index, 'id'], message: `Duplicate id: ${item.id}` });
      ids.add(item.id);
    });
  }
  const dois = new Set<string>();
  content.publications.forEach((item, index) => {
    if (!item.doi) return;
    const doi = item.doi.toLowerCase();
    if (dois.has(doi)) ctx.addIssue({ code: 'custom', path: ['publications', index, 'doi'], message: `Duplicate DOI: ${item.doi}` });
    dois.add(doi);
  });
});

export type Publication = z.infer<typeof publicationSchema>;
export type Person = z.infer<typeof personSchema>;
export type Cover = z.infer<typeof coverSchema>;
export type Position = z.infer<typeof positionSchema>;

export function contentImagePaths(content: z.infer<typeof contentSchema>): string[] {
  return [...new Set([
    content.site.portrait,
    ...content.people.flatMap((person) => [person.photo, person.researchImage]),
    ...content.covers.map((cover) => cover.image),
    ...content.biography.map((position) => position.image)
  ])];
}
