import { readFile, access } from 'node:fs/promises';
import { contentSchema, contentImagePaths } from '../src/lib/content/schema.ts';

const names = ['publications', 'people', 'covers', 'biography', 'site'];
const entries = await Promise.all(names.map(async (name) => [
  name, JSON.parse(await readFile(new URL(`../src/lib/content/${name}.json`, import.meta.url), 'utf8'))
]));
const result = contentSchema.safeParse(Object.fromEntries(entries));
if (!result.success) {
  for (const issue of result.error.issues) console.error(`${issue.path.join('.')}: ${issue.message}`);
  process.exit(1);
}
const missing: string[] = [];
await Promise.all(contentImagePaths(result.data).map(async (path) => {
  try { await access(new URL(`../src/lib/assets/${path}`, import.meta.url)); }
  catch { missing.push(path); }
}));
if (missing.length) {
  console.error(`Missing source images:\n${missing.join('\n')}`);
  process.exit(1);
}
console.log(`Content valid: ${result.data.publications.length} publications, ${result.data.people.length} people, ${result.data.covers.length} covers, ${result.data.biography.length} career entries.`);
