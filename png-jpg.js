
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
SwacchtaImages = "./static/assets/swacchta/**/**.jpg",         // PNG images       // JPEG images
EducationImages = "./static/assets/education/**/**.jpg",         // PNG images       // JPEG images
HealthImages = "./static/assets/health/**/**.jpg",         // PNG images       // JPEG images

(async () => {
  const files = await imagemin([SwacchtaImages], {
    destination: './static/webp/swacchta',
    plugins: [imageminWebp()],
  });

  const filesEdu = await imagemin([EducationImages], {
    destination: './static/webp/education',
    plugins: [imageminWebp()],
  });

  const filesHealth = await imagemin([HealthImages], {
    destination: './static/webp/health',
    plugins: [imageminWebp()],
  });





  console.log(SwacchtaImages);
})();