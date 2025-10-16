import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=youtube',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('YouTube not connected');
  }
  return accessToken;
}

async function getYouTubeClient() {
  const accessToken = await getAccessToken();
  return google.youtube({ version: 'v3', auth: accessToken });
}

const tracks = [
  { title: 'I am Here', artist: 'Ricardo Scales', duration: '4:32', views: 12345678 },
  { title: 'Third Stream Dreams', artist: 'Ricardo Scales', duration: '5:18', views: 8123456 },
  { title: 'San Francisco Nights', artist: 'Ricardo Scales', duration: '4:45', views: 6789012 },
  { title: 'Redwood Room Memories', artist: 'Ricardo Scales', duration: '6:12', views: 5234567 },
  { title: 'Top of the Mark', artist: 'Ricardo Scales', duration: '5:22', views: 4567890 }
];

async function searchYouTube(query) {
  const youtube = await getYouTubeClient();
  
  const response = await youtube.search.list({
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: 5,
    videoDefinition: 'high'
  });

  return response.data.items;
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer);
      });
      response.on('error', reject);
    });
  });
}

async function convertToWebP(buffer, outputPath) {
  await sharp(buffer)
    .resize(320, 320, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  const sizeKB = stats.size / 1024;
  
  if (sizeKB > 120) {
    const newQuality = Math.floor(80 * (120 / sizeKB));
    await sharp(buffer)
      .resize(320, 320, { fit: 'cover' })
      .webp({ quality: newQuality })
      .toFile(outputPath);
  }
}

async function buildMusicData() {
  const musicData = [];

  for (const track of tracks) {
    console.log(`Searching for: ${track.title} - ${track.artist}`);
    const query = `${track.title} ${track.artist}`;
    const results = await searchYouTube(query);
    
    if (results && results.length > 0) {
      const video = results[0];
      const youtubeId = video.id.videoId;
      const thumbUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      
      console.log(`Found: ${video.snippet.title} (${youtubeId})`);
      
      const thumbPath = path.join(__dirname, '..', 'public', 'covers', `${youtubeId}.webp`);
      
      try {
        const imageBuffer = await downloadImage(thumbUrl, thumbPath);
        await convertToWebP(imageBuffer, thumbPath);
        console.log(`Thumbnail saved: ${thumbPath}`);
      } catch (error) {
        console.error(`Error downloading thumbnail for ${youtubeId}:`, error.message);
      }
      
      musicData.push({
        title: track.title,
        artist: track.artist,
        youtubeId: youtubeId,
        duration: track.duration,
        views: track.views,
        thumb: `/covers/${youtubeId}.webp`
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  const outputPath = path.join(__dirname, '..', 'public', 'music.json');
  fs.writeFileSync(outputPath, JSON.stringify(musicData, null, 2));
  console.log(`\nMusic data saved to ${outputPath}`);
  console.log(`Total tracks: ${musicData.length}`);
}

buildMusicData().catch(console.error);
