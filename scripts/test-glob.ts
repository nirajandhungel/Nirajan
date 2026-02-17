import { globSync } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ORIGINALS_DIR = path.join(__dirname, '../public/originals');

console.log('Searching in:', ORIGINALS_DIR);

const pattern = '**/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG,WEBP,SVG}';
const files = globSync(pattern, {
    cwd: ORIGINALS_DIR,
    ignore: ['**/node_modules/**', '**/optimized/**', '**/originals/**']
});

console.log('Found files:', files.length);
const svgs = files.filter(f => f.toLowerCase().endsWith('.svg'));
console.log('Found SVGs:', svgs.length);
if (svgs.length > 0) {
    console.log('Sample content:', svgs.slice(0, 5));
}
