import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const sourceRoots = ['app', 'components', 'lib'];
const sourceExtensions = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx']);
const blockedPatterns = [
  {
    label: 'OpenAI API key-shaped token in source',
    pattern: /(^|[^A-Za-z0-9])sk-(?:proj-)?[A-Za-z0-9_-]{20,}/,
  },
  {
    label: 'browser-exposed OpenAI credential variable',
    pattern: /NEXT_PUBLIC_OPENAI_(?:API_)?KEY/,
  },
  {
    label: 'hardcoded admin password fallback',
    pattern: /ADMIN_PASSWORD\s*=\s*process\.env\.ADMIN_PASSWORD\s*\|\|/,
  },
  {
    label: 'phone number included in analytics event',
    pattern: /trackEvent\(\s*['"]phone_click['"][\s\S]{0,220}\bphone_(?:number|value)\s*:/,
  },
  {
    label: 'email address included in analytics event',
    pattern: /trackEvent\(\s*['"]email_click['"][\s\S]{0,220}\bemail\s*:/,
  },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const failures = [];
for (const root of sourceRoots) {
  for (const filePath of await collectFiles(path.resolve(root))) {
    const contents = await readFile(filePath, 'utf8');
    for (const check of blockedPatterns) {
      if (check.pattern.test(contents)) {
        failures.push(`${path.relative(process.cwd(), filePath)}: ${check.label}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Source security audit failed:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log('Source security audit passed.');
