import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/page\.(js|jsx|ts|tsx)$/.test(entry.name)) files.push(full);
  }
}

walk(path.join(root, 'app'));

const rows = files.map((file) => {
  const source = fs.readFileSync(file, 'utf8');
  const metadata = source.match(/export const metadata\s*=\s*\{([\s\S]*?)\n\};/m)?.[1] || '';
  const title = metadata.match(/\btitle:\s*['"]([^'"]+)['"]/)?.[1] || '';
  const description = metadata.match(/\bdescription:\s*['"]([^'"]+)['"]/)?.[1] || '';
  const h1Count = (source.match(/<h1\b/g) || []).length;
  return {
    file: path.relative(root, file),
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1Count,
  };
});

const duplicateValues = (key) => Object.values(rows.reduce((groups, row) => {
  if (!row[key]) return groups;
  (groups[row[key]] ||= []).push(row.file);
  return groups;
}, {})).filter((group) => group.length > 1);

console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  pageCount: rows.length,
  missingOrInvalid: rows.filter((row) => !row.title || !row.description || row.h1Count !== 1),
  titleLength: rows.filter((row) => row.title && (row.titleLength < 25 || row.titleLength > 60)),
  descriptionLength: rows.filter((row) => row.description && (row.descriptionLength < 70 || row.descriptionLength > 160)),
  duplicateTitles: duplicateValues('title'),
  duplicateDescriptions: duplicateValues('description'),
}, null, 2));
