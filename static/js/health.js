let jsondata;
let ImageObject = {};

fetch("https://spreading-smiles.herokuapp.com/healthImages")
  .then(function(u) {
    return u.json();
  })
  .then(function(u) {
    return Object.entries(u);
  })
  .then(function(json) {
    jsondata = json;
    var detailsObject = jsondata[0][1];
    console.log(detailsObject);
    for (i = 1; i < jsondata.length; i++) {
      // console.log(jsondata[i]);
      // console.log(`/details?album=${jsondata[i][0]}`);

      ImageObject[jsondata[i][0]] = {
        album: jsondata[i][0],
        imageArray: jsondata[i][1]
      };
      console.log(ImageObject);
      $("#imageGalleryHealth").append(
        `<div  class="col-xl-4 col-lg-4 col-md-6 col-sm-6 default-margin-mt element-item default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 filter ${
          detailsObject[jsondata[i][0]].year
        } portfolio-headmove">
					<div class="single-portfolio">
            <div class="portfolio-image">
                <picture>
									<source srcset="./webp/health/${jsondata[i][1][0]}.webp" type="image/webp">
									<source srcset="./assets/health/${jsondata[i][0]}/${jsondata[i][1][0]}.jpg" type="image/jpeg">
									<img src="./assets/health/${jsondata[i][0]}/${jsondata[i][1][0]}.jpg" alt="" />
								</picture>

							<div class="portfolio-content">
								<div class="item-icon"><button  class="btn btn-default imageGalleryButton" data-toggle="modal" data-album=${
                  jsondata[i][0]
                }  data-target=".bs-example-modal-lg">Explore Album</button></div>
							</div>
						</div>
					</div>
          <div class="portfolio-titile">
						<h4>${detailsObject[jsondata[i][0]].albumTitle}</h4>
					</div>
				</div>`
      );
    }
    // console.log(ImageObject);
    $(".imageGalleryButton").on("click", function(event) {
      // event.stopPropagation();
      // event.stopImmediatePropagation();
      // console.log($(this).attr("data-album"));
      var album = $(this).attr("data-album");
      var imageListFromAlbum = ImageObject[album].imageArray;
      $("#carouselImages").html("");

      for (i = 0; i < imageListFromAlbum.length; i++) {
        $("#carouselImages").append(
          `<div class="carousel-item ">
                <picture>
									<source srcset="./webp/health/${imageListFromAlbum[i]}.webp" type="image/webp">
									<source srcset="./assets/health/${album}/${imageListFromAlbum[i]}.jpg" type="image/jpeg">
									<img class="d-block w-100" src="./assets/health/${album}/${imageListFromAlbum[i]}.jpg" alt="First slide" />
								</picture>

                  <div class="carousel-caption d-none d-md-block">

                    <p>${detailsObject[album].discription}</p>
                  </div>

                </div>`
        );
        $("#carouselImages div")
          .first()
          .addClass("active");
      }
    });
  });
