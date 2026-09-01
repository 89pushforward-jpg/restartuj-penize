import { cp, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const projectRoot = process.cwd();
const outputDir = join(projectRoot, 'docs');
const clientDir = join(projectRoot, 'dist', 'client');

const response = await fetch('http://localhost:3000/');
if (!response.ok) {
  throw new Error(`Local site returned HTTP ${response.status}`);
}

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\s+rel="modulepreload"[^>]*\/?>/gi, '')
  .replace(/<link\s+rel="stylesheet"\s+href="\/app\/globals\.css"[^>]*\/?>/i, '<link rel="stylesheet" href="./_next/static/css/index.Bt9cvn_p.css"/>')
  .replaceAll('href="/og.png"', 'href="./og.png"')
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/')
  .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  .replaceAll('src="/og.png"', 'src="./og.png"');

await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true, force: true });
await writeFile(join(outputDir, 'index.html'), html, 'utf8');
await writeFile(join(outputDir, '.nojekyll'), '', 'utf8');

console.log(`GitHub Pages export created at ${outputDir}`);
