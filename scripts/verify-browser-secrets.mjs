import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const staticDir = path.resolve('.next/static');
const patterns = [
  {
    label: 'OpenAI API key-shaped token',
    pattern: /(^|[^A-Za-z0-9])sk-(?:proj-)?[A-Za-z0-9_-]{20,}/,
  },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const failures = [];
for (const filePath of await collectFiles(staticDir)) {
  const contents = await readFile(filePath, 'utf8');
  for (const check of patterns) {
    if (check.pattern.test(contents)) {
      failures.push(`${path.relative(process.cwd(), filePath)}: ${check.label}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Browser secret audit failed:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log('Browser secret audit passed.');
