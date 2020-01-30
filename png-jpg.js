
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
PNGImages = "./assets/health/**/**.jpg",         // PNG images       // JPEG images

(async () => {
  const files = await imagemin([PNGImages], {
    destination: './webp/health',
    plugins: [imageminWebp()],
  });





  console.log(JPEGiles);
})();