import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const GALLERY_DIR = join(process.cwd(), 'public/images/gallery');
const OUTPUT_DIR = join(process.cwd(), 'public/images/gallery-optimized');
const MAX_WIDTH = 1200;
const QUALITY = 80;
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(GALLERY_DIR);
  const imageFiles = files.filter(f => {
    const ext = parse(f).ext.toLowerCase();
    return IMAGE_EXTS.has(ext);
  });

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(GALLERY_DIR, file);
    const { name } = parse(file);
    const outputPath = join(OUTPUT_DIR, `${name}.webp`);

    try {
      const originalStat = await stat(inputPath);
      totalOriginal += originalStat.size;

      await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const optimizedStat = await stat(outputPath);
      totalOptimized += optimizedStat.size;

      const savings = ((1 - optimizedStat.size / originalStat.size) * 100).toFixed(1);
      const origMB = (originalStat.size / 1024 / 1024).toFixed(1);
      const optKB = (optimizedStat.size / 1024).toFixed(0);
      console.log(`✓ ${file} — ${origMB}MB → ${optKB}KB (${savings}% smaller)`);
    } catch (err) {
      console.error(`✗ ${file} — ${err.message}`);
    }
  }

  const totalOrigMB = (totalOriginal / 1024 / 1024).toFixed(1);
  const totalOptMB = (totalOptimized / 1024 / 1024).toFixed(1);
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  console.log(`\n═══ SUMMARY ═══`);
  console.log(`Original total: ${totalOrigMB}MB`);
  console.log(`Optimized total: ${totalOptMB}MB`);
  console.log(`Savings: ${totalSavings}%`);
}

main().catch(console.error);
