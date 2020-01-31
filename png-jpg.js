
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
PNGImages = "./static/assets/swacchta/**/**.jpg",         // PNG images       // JPEG images

(async () => {
  const files = await imagemin([PNGImages], {
    destination: './static/webp/swacchta',
    plugins: [imageminWebp()],
  });





  console.log(JPEGiles);
})();