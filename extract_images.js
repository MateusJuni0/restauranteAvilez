const fs = require('fs');
const https = require('https');

const url = "https://www.bairrodoavillez.pt";

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Extract img src using regex
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].startsWith('http') || match[1].startsWith('//')) {
        images.push(match[1]);
      } else {
        images.push(url + (match[1].startsWith('/') ? '' : '/') + match[1]);
      }
    }
    console.log("Found images:", images);
    fs.writeFileSync('images_list.json', JSON.stringify(images, null, 2));
  });
}).on('error', (err) => {
  console.error("Error: " + err.message);
});
