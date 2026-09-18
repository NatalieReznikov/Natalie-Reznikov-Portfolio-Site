import { publicationSchema } from '../src/lib/content/schema.ts';

// Review the output before copying it into publications.json. No file is changed.
const input = process.argv[2];
if (!input || input === '--help') {
  console.log('Usage: npm run import:publication -- 10.xxxx/example');
  process.exit(input ? 0 : 1);
}
try {
  const doi = input.trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '');
  if (!/^10\.\d{4,9}\/\S+$/.test(doi)) throw new Error('Provide a DOI or a doi.org URL.');
  const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
    headers: { 'User-Agent': 'NatalieReznikovPortfolio/1.0 (https://nataliereznikov.com)' },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`Crossref returned ${response.status}. Enter the record manually if no metadata is available.`);
  const { message: work } = await response.json();
  const year = (work.published ?? work['published-print'] ?? work['published-online'])?.['date-parts']?.[0]?.[0] ?? null;
  const record = publicationSchema.parse({
    id: `doi-${doi.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`,
    authors: (work.author ?? []).map((author) => author.name ?? [author.family, author.given].filter(Boolean).join(' ')).join(', '),
    title: work.title?.[0] ?? '',
    year,
    citation: [work['container-title']?.[0], year, work.volume, work.issue ? `(${work.issue})` : '', work.page ?? work['article-number']].filter(Boolean).join(', '),
    doi: work.DOI ?? doi,
    status: 'published',
    notes: ''
  });
  console.log(JSON.stringify(record, null, 2));
  console.error('Review author formatting, title markup, citation, and publication status before adding this record.');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
