import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const appDir = path.resolve('app');
const ignoredDirectories = new Set(['api']);
const sourceExtensions = new Set(['.js', '.jsx', '.ts', '.tsx']);

const blockedPatterns = [
  { label: 'published starting price', pattern: /(?:from|starts?\s+(?:at|from|around))\s+\$\d/i },
  { label: 'published price range', pattern: /\$\d[\d,]*(?:\s*)?(?:-|–|to)(?:\s*)?\$\d/i },
  { label: 'promised week range', pattern: /\b\d+\s*(?:-|–|to)\s*\d+\s+weeks?\b/i },
  { label: 'promised delivery duration', pattern: /\b\d+\s+weeks?\s+(?:of\s+)?(?:delivery|build|support)\b/i },
  { label: 'unsupported experience claim', pattern: /\b10\+\s+years\b/i },
  { label: 'unsupported certification claim', pattern: /\b15\+\s+certifications\b/i },
  { label: 'unsupported prior-work claim', pattern: /\bwe have (?:never lost|run cleanups|completed projects)\b/i },
  { label: 'unsupported revenue promise', pattern: /\b(?:generates revenue|revenue-generating machine)\b/i },
  { label: 'unsupported expert claim', pattern: /\bGreater Vancouver(?:'|&apos;)s[^\n<]{0,80}\bexperts?\b/i },
  { label: 'unsupported response-time promise', pattern: /\bwithin 24 hours\b/i },
  { label: 'unsupported sales-pressure promise', pattern: /\bno sales pressure\b/i },
  { label: 'unsupported exact-price promise', pattern: /\bexact price quote\b/i },
  { label: 'unsupported structured price hint', pattern: /\bpriceRange\s*:/ },
  { label: 'unsupported fixed service-detail claim', pattern: /\bfull scope, (?:timeline, and pricing|pricing, and timeline)\b/i },
  { label: 'unsupported fixed timeline and price claim', pattern: /\bon what timeline, at what price\b/i },
  { label: 'unsupported published timeline claim', pattern: /\bwhat timelines look like\b/i },
  { label: 'unsupported seniority claim', pattern: /\bsenior CRM help\b/i },
  { label: 'representative work labelled as a case study', pattern: /\bCase Study\b/ },
];

const blogBlockedPatterns = [
  { label: 'unsupported publication analysis claim', pattern: /\bwe scanned (?:over )?\d/i },
  { label: 'unsupported email performance range', pattern: /\b\d+\s*(?:-|–|to)\s*\d+% open rate\b/i },
  { label: 'unsupported AI performance range', pattern: /\b\d+\s*(?:-|–|to)\s*\d+% (?:conversion|faster|accuracy|revenue)/i },
  { label: 'unsupported approval guarantee', pattern: /\bgets approved\b/i },
  { label: 'anonymous company byline', pattern: /\bEmergent Logic Team\b/ },
  { label: 'representative work labelled as a case study', pattern: /\brepresentative[^\n<]{0,80}case study\b/i },
];

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectSourceFiles(fullPath));
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const failures = [];
for (const filePath of await collectSourceFiles(appDir)) {
  const contents = await readFile(filePath, 'utf8');
  const lines = contents.split('\n');
  const relativePath = path.relative(appDir, filePath);
  const checks = relativePath.startsWith(`blog${path.sep}`)
    ? [
        ...blockedPatterns.filter(({ label }) => label !== 'representative work labelled as a case study'),
        ...blogBlockedPatterns,
      ]
    : blockedPatterns;

  lines.forEach((line, index) => {
    for (const check of checks) {
      if (check.pattern.test(line)) {
        failures.push(`${path.relative(process.cwd(), filePath)}:${index + 1} ${check.label}`);
      }
    }
  });
}

if (failures.length > 0) {
  console.error(`Credibility claim audit failed:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log('Credibility claim audit passed.');
