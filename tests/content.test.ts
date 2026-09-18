import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { contentSchema, publicationSchema, positionSchema } from '../src/lib/content/schema.ts';

const content = Object.fromEntries(['publications', 'people', 'covers', 'biography', 'site'].map((name) => [
  name, JSON.parse(readFileSync(new URL(`../src/lib/content/${name}.json`, import.meta.url), 'utf8'))
]));

test('rejects duplicate publications even when DOI casing differs', () => {
  const input = structuredClone(content);
  input.publications.push({ ...input.publications[0], id: 'another-id', doi: input.publications[0].doi.toUpperCase() });
  assert.equal(contentSchema.safeParse(input).success, false);
});

test('accepts a book chapter with no DOI or link', () => {
  assert.equal(publicationSchema.safeParse({
    id: 'book-chapter', title: 'A chapter', authors: 'An Author', year: null,
    citation: 'Book title, publisher', status: 'in-press', notes: ''
  }).success, true);
});

test('rejects misspelled member status and missing alternative text', () => {
  const input = structuredClone(content);
  input.people[0].status = 'alumnus';
  input.people[0].researchAlt = '';
  assert.equal(contentSchema.safeParse(input).success, false);
});

test('rejects conflicting identifiers and images outside the source folder', () => {
  const input = structuredClone(content);
  input.people[1].id = input.people[0].id;
  input.people[0].photo = '../artwork/portrait.png';
  assert.equal(contentSchema.safeParse(input).success, false);
});

test('rejects reversed career dates', () => {
  assert.equal(positionSchema.safeParse({ ...content.biography[0], from: 2020, to: 2010 }).success, false);
});
