let jsondata;
let ImageArray = {};

fetch("https://spreading-smiles.herokuapp.com/images")
  .then(function(u) {
    return u.json();
  })
  .then(function(u) {
    return Object.entries(u);
  })
  .then(function(json) {
    jsondata = json;
    console.log(jsondata);
    for (i = 0; i < jsondata.length; i++) {
      console.log(jsondata[i]);
      ImageArray[jsondata[i][0]] = jsondata[i];
      $("#imageGallery").append(
        `<div data-category="y-2016" class="col-xl-4 col-lg-4 col-md-6 col-sm-6 margin-top-sb-30 y-2016 default-margin-mt element-item portfolio-headmove">
					<div class="single-portfolio">
						<div class="portfolio-image">
							<img src="./assets/${jsondata[i][0]}/${jsondata[i][1][0]}" alt="">
							<div class="portfolio-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam molestiae voluptatum nemo, animi error, fugiat?</p>
								<a href="#">view details</a>
							</div>
						</div>
					</div>
					<div class="portfolio-titile">
						<h4>Lorem ipsum dolor sit amet.</h4>
					</div>
				</div>`
      );
    }
  });
