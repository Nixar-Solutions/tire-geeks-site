// Quick script to generate the path mapping for galleryBuilds.ts
import { readdir } from 'fs/promises';
import { join, parse } from 'path';

const dir = join(process.cwd(), 'public/images/gallery-optimized');
const files = await readdir(dir);
const webpFiles = files.filter(f => f.endsWith('.webp')).map(f => parse(f).name);
console.log(JSON.stringify(webpFiles, null, 2));
