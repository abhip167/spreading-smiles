(function($) {
  ("use strict");
  /*----------------------------
	Animation js active
	------------------------------ */
  AOS.init();
  /*----------------------------
	Counter-up
  ------------------------------ */

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
  /*----------------------------
     Video Popup JS
	----------------------------*/
  $(".popup-youtube").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  /*-----------------------------
Portfolio Carousel
------------------------------*/

  $(".portfolio-item-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: "<i class='fas fa-chevron-left left-arrow'></i>",
    nextArrow: "<i class='fas fa-chevron-right right-arrow'></i>",
    infinite: true,
    lazyLoad: "ondemand",
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
  let jsondata;
  let ImageArray = {};
  // $("#imageLink").on("click", "button", function() {
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
          `<div data-category="y-2017" class="col-xl-4 col-lg-4 col-md-6 col-sm-6 default-margin-mt element-item default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 y-2017 portfolio-headmove">
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
  // });

  /*-----------------------------
Testimonial Carousel
------------------------------*/
  $(".testimonial-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: "<i class='fas fa-chevron-left left-arrow-2'></i>",
    nextArrow: "<i class='fas fa-chevron-right right-arrow-2'></i>",
    infinite: true,
    autoplay: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  /*-----------------------------
Project Carousel
------------------------------*/
  $(".single-project-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: "<i class='fas fa-chevron-left left-arrow-3'></i>",
    nextArrow: "<i class='fas fa-chevron-right right-arrow-3'></i>",
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  /*----------------------------
	Search
	------------------------------ */
  var changeClass = function(name) {
    $("#search, .search-icon-area a")
      .removeAttr("class")
      .addClass(name);
  };
  /*----------------------------
	jQuery Mean Menu
	------------------------------ */
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "767"
  });
  $(".info-bar").on("click", function() {
    $(".extra-info").addClass("info-open");
  });
  $(".close-icon").on("click", function() {
    $(".extra-info").removeClass("info-open");
  });
  /*----------------------------
    Sticky menu active
    ------------------------------ */
  function fixed_top_menu() {
    var windows = $(window);
    windows.on("scroll", function() {
      var header_height = $(".main-navigation").height();
      var scrollTop = windows.scrollTop();
      if (scrollTop > header_height) {
        $(".main-navigation").addClass("sticky");
      } else {
        $(".main-navigation").removeClass("sticky");
      }
    });
  }
  fixed_top_menu();

  /*-----------------
	Scroll-Up
	-----------------*/
  $.scrollUp({
    scrollText: '<i class="far fa-arrow-alt-circle-up"></i>',
    easingType: "linear",
    scrollSpeed: 1000,
    animation: "fade"
  });
  /*-----------------
    POrtfolio Filter
    -----------------*/

  // var $grid = $(".grid").isotope({
  //   // percentPosition: true
  //   itemSelector: ".portfolio-headmove"
  // });

  // $(".portfolio-filter").on("click", "a", function(e) {
  //   e.preventDefault();
  //   $(this)
  //     .parent()
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active");
  //   var filterValue = $(this).attr("data-filter");
  //   // $grid.isotope({
  //   //   filter: filterValue
  //   // });
  // });
  // init Isotope

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this)
        .find(".number")
        .text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this)
        .find(".name")
        .text();
      return name.match(/ium$/);
    }
  };

  // bind filter button click
  $("#filters").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $("#sorts").on("click", "button", function() {
    var sortByValue = $(this).attr("data-sort-by");
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  /*----------------------------
	       Menu active JS
	     ----------------------------*/
  $(".portfolio-filter ul li a").on("click", function() {
    $(".portfolio-filter ul li a").removeClass("current");
    $(this).addClass("current");
  });

  $(".main-menu ul li a").on("click", function() {
    $(".main-menu ul li a").removeClass("current");
    $(this).addClass("current");
  });
  /*----------------------------
	Preloader
	------------------------------ */
  $(window).on("load", function() {
    $("#status").on("fadeOut", "slow");
    $("#preloader")
      .on("delay", 500)
      .on("fadeOut", "slow")
      .remove();
  });
  /*----------------------------
	Move Background
	------------------------------ */
  $(function() {
    $(".big-footer").backgroundMove();
  });
})(jQuery);
