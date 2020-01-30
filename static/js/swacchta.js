let jsondataSwacchta;
let ImageObjectSwacchta = {};

fetch("https://spreading-smiles.herokuapp.com/swacchtaImages")
  .then(function(u) {
    return u.json();
  })
  .then(function(u) {
    return Object.entries(u);
  })
  .then(function(json) {
    jsondataSwacchta = json;
    var detailsObject = jsondataSwacchta[0][1];
    console.log(detailsObject);
    for (i = 1; i < jsondataSwacchta.length; i++) {
      // console.log(jsondataSwacchta[i]);
      // console.log(`/details?album=${jsondataSwacchta[i][0]}`);

      ImageObjectSwacchta[jsondataSwacchta[i][0]] = {
        album: jsondataSwacchta[i][0],
        imageArray: jsondataSwacchta[i][1]
      };
      console.log(ImageObjectSwacchta);
      $("#imageGallerySwacchta").append(
        `<div  class="col-xl-4 col-lg-4 col-md-6 col-sm-6 default-margin-mt element-item default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 filter ${
          detailsObject[jsondataSwacchta[i][0]].year
        } portfolio-headmove">
					<div class="single-portfolio">
						<div class="portfolio-image">
							<img src="./assets/swacchta/${jsondataSwacchta[i][0]}/${jsondataSwacchta[i][1][0]}" alt="">
							<div class="portfolio-content">
								<div class="item-icon"><button  class="btn btn-default imageGalleryButton" data-toggle="modal" data-album=${
                  jsondataSwacchta[i][0]
                }  data-target=".bs-example-modal-lg">Explore Album</button></div>
							</div>
						</div>
					</div>
          <div class="portfolio-titile">
						<h4>${detailsObject[jsondataSwacchta[i][0]].albumTitle}</h4>
					</div>
				</div>`
      );
    }
    // console.log(ImageObjectSwacchta);
    $(".imageGalleryButton").on("click", function(event) {
      // event.stopPropagation();
      // event.stopImmediatePropagation();
      // console.log($(this).attr("data-album"));
      var album = $(this).attr("data-album");
      var imageListFromAlbum = ImageObjectSwacchta[album].imageArray;
      $("#carouselImages").html("");

      for (i = 0; i < imageListFromAlbum.length; i++) {
        $("#carouselImages").append(
          `<div class="carousel-item ">
                  <img class="d-block w-100" src="./assets/swacchta/${album}/${imageListFromAlbum[i]}" alt="First slide">
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
