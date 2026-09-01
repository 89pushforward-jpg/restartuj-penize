import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const projectRoot = process.cwd();
const outputDir = join(projectRoot, 'docs');
const clientDir = join(projectRoot, 'dist', 'client');
const cssDir = join(clientDir, '_next', 'static', 'css');
const cssFile = (await readdir(cssDir)).find((file) => file.startsWith('index.') && file.endsWith('.css'));

if (!cssFile) {
  throw new Error('Built stylesheet was not found');
}

const response = await fetch(process.env.EXPORT_SOURCE_URL ?? 'http://127.0.0.1:3001/');
if (!response.ok) {
  throw new Error(`Local site returned HTTP ${response.status}`);
}

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\s+rel="modulepreload"[^>]*\/?>/gi, '')
  .replace(/<link\s+rel="stylesheet"\s+href="\/app\/globals\.css"[^>]*\/?>/i, `<link rel="stylesheet" href="./_next/static/css/${cssFile}"/>`)
  .replaceAll('href="/og-v2.png"', 'href="./og-v2.png"')
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/')
  .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  .replaceAll('src="/og-v2.png"', 'src="./og-v2.png"')
  .replaceAll('src="/brand/', 'src="./brand/')
  .replaceAll('src="/books/', 'src="./books/')
  .replaceAll('src="/story/', 'src="./story/');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true, force: true });
await writeFile(join(outputDir, 'index.html'), html, 'utf8');
await writeFile(join(outputDir, '.nojekyll'), '', 'utf8');

console.log(`GitHub Pages export created at ${outputDir}`);
