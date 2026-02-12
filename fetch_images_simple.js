const https = require('https');
const fs = require('fs');

const URLS = [
  'https://www.bairrodoavillez.pt',
  'https://www.bairrodoavillez.pt/taberna/',
  'https://www.bairrodoavillez.pt/pateo/',
  'https://www.bairrodoavillez.pt/pizzaria-lisboa/',
  'https://www.bairrodoavillez.pt/pop-up-noelia/' // ou url correta
];

const allImages = new Set();

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Find <img src="...">
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
        let match;
        while ((match = imgRegex.exec(data)) !== null) {
          if (match[1].match(/\.(jpg|jpeg|png|webp)$/i)) {
            allImages.add(match[1]);
          }
        }
        
        // Find background-image: url(...)
        const bgRegex = /url\(['"]?([^'")]+)['"]?\)/g;
        while ((match = bgRegex.exec(data)) !== null) {
          if (match[1].match(/\.(jpg|jpeg|png|webp)$/i)) {
            allImages.add(match[1]);
          }
        }
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function main() {
  console.log("Fetching images...");
  for (const url of URLS) {
    console.log(`Scanning ${url}...`);
    await fetchPage(url);
  }
  
  const images = Array.from(allImages);
  console.log(`Found ${images.length} images.`);
  fs.writeFileSync('site_images.json', JSON.stringify(images, null, 2));
}

main();
