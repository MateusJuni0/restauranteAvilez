const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Páteo
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Pateo_Robalo-grelhado-com-arroz-de-gambas_29Abr2025_009A3265_credito_GrupoJoseAvillez.jpg", name: "pateo-hero.jpg" },
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Pateo_Mil-folhas-de-pastel-de-nata_05Mar2025_009A8766_credito_GrupoJoseAvillez.jpg", name: "pateo-dish.jpg" },
  
  // Taberna
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Taberna_Croquetes_009A0036_Credito_GrupoJoseAvillez.jpg", name: "taberna-hero.jpg" },
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Taberna_Bitoque-do-lombo_009A0113_Credito_GrupoJoseAvillez.jpg", name: "taberna-dish.jpg" },

  // Pizzaria
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Pizzaria_NOVO-ESPACO_Margherita_1_credito_GrupoJoseAvillez.jpg", name: "pizzaria-hero.jpg" },
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2025/10/Pizzaria_NOVO-ESPACO_Ambiente_2_credito_GrupoJoseAvillez.jpg", name: "pizzaria-dish.jpg" },

  // Noélia
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2026/01/Fotos_Pop_Up_Noelia_Baixo-02.jpg", name: "noelia-hero.jpg" },
  { url: "https://www.bairrodoavillez.pt/wp-content/uploads/2026/01/Fotos_Pop_Up_Noelia_Baixo-05.jpg", name: "noelia-dish.jpg" }
];

const dir = 'public/images';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(dir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename);
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    await download(img.url, img.name);
  }
}

main();
