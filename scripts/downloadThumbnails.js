import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const musicDataPath = path.join(__dirname, '..', 'public', 'music.json');
const musicData = JSON.parse(fs.readFileSync(musicDataPath, 'utf8'));

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    });
  });
}

async function convertToWebP(buffer, outputPath, targetSizeKB = 120) {
  await sharp(buffer)
    .resize(320, 320, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(outputPath);

  let stats = fs.statSync(outputPath);
  let sizeKB = stats.size / 1024;
  
  if (sizeKB > targetSizeKB) {
    const newQuality = Math.max(40, Math.floor(80 * (targetSizeKB / sizeKB)));
    await sharp(buffer)
      .resize(320, 320, { fit: 'cover' })
      .webp({ quality: newQuality })
      .toFile(outputPath);
    
    stats = fs.statSync(outputPath);
    sizeKB = stats.size / 1024;
  }
  
  return sizeKB;
}

async function downloadThumbnails() {
  const coversDir = path.join(__dirname, '..', 'public', 'covers');
  
  if (!fs.existsSync(coversDir)) {
    fs.mkdirSync(coversDir, { recursive: true });
  }

  for (const track of musicData) {
    const thumbUrl = `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`;
    const outputPath = path.join(coversDir, `${track.youtubeId}.webp`);
    
    try {
      console.log(`Downloading thumbnail for: ${track.title}`);
      const imageBuffer = await downloadImage(thumbUrl);
      const sizeKB = await convertToWebP(imageBuffer, outputPath);
      console.log(`✓ Saved ${track.youtubeId}.webp (${sizeKB.toFixed(1)} KB)`);
    } catch (error) {
      console.error(`✗ Error downloading ${track.youtubeId}:`, error.message);
    }
  }
  
  console.log('\nThumbnail download complete!');
}

downloadThumbnails().catch(console.error);
