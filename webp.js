
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
PNGImages = "./static/img/*.png",         // PNG images
JPEGImages = "./static/img/*.jpg";        // JPEG images

(async () => {
  const files = await imagemin([PNGImages], {
    destination: './static/img/webp',
    plugins: [imageminWebp({
      lossless: true // Losslessly encode images
  })],
  });

  const JPEGiles = await imagemin([JPEGImages], {
    destination: './static/img/webp',
    plugins: [imageminWebp({
      quality: 65 // Quality setting from 0 to 100
    })],
  });



  console.log(JPEGiles);
})();