(function($) {
  ("use strict");
  // $("#footer-fixed").load("./footer.html");
  // $("#home").load("./header.html");

  // $("a.menu").click(function() {
  //   $("a.menu").removeClass("current");
  //   $(this).addClass("current");
  // });

  /*----------------------------
	Animation js active
	------------------------------ */
  AOS.init();
  /*----------------------------
	Counter-up
  ------------------------------ */

  // $(".counter").counterUp({
  //   delay: 10,
  //   time: 1000
  // });
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

  // $("#imageLink").on("click", "button", function() {

  // });

  $(".filter-button").click(function() {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

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
        $("#logo").attr("src","img/ss-logo-mobile.svg");
        $(".main-menu ul li a").css("color","#323657");
      } else {
        $(".main-navigation").removeClass("sticky");
        $("#logo").attr("src","img/ss-logo-mobile-yellow.svg");
        $(".main-menu ul li a").css("color","yellow");
      }
    });
  }
  fixed_top_menu();

  /*-----------------
	Scroll-Up
	-----------------*/
  // $.scrollUp({
  //   scrollText: '<i class="far fa-arrow-alt-circle-up"></i>',
  //   easingType: "linear",
  //   scrollSpeed: 1000,
  //   animation: "fade"
  // });
  /*-----------------
    POrtfolio Filter
    -----------------*/

  // var $grid = $(".grid").isotope({
  //   // percentPosition: true
  //   itemSelector: ".portfolio-headmove"
  // });
  // var filterList = $(".portfolio-filter ul >li a");
  // var filterAttr = [];
  // $.each(filterList, function(index, value) {
  //   var filterValue = $(value).attr("data-filter");
  //   console.log(filterValue);
  //   filterAttr.push(filterValue);
  //   // $(filterValue).hide();
  // });

  // $(".portfolio-filter").on("click", "a", function(e) {
  //   e.preventDefault();
  //   $(this)
  //     .parent()
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active");
  //   var filterValue = $(this).attr("data-filter");
  //   console.log(filterValue);
  //   $(filterValue).hide();

  //   // var newArray = filterAttr;

  //   // // Find and remove item from an array
  //   // var i = newArray.indexOf(filterValue);
  //   // if (i != -1) {
  //   //   newArray.splice(i, 1);
  //   // }
  //   // $.each(newArray, function(value) {
  //   //   $(value).hide();
  //   // });
  //   // $grid.isotope({
  //   //   filter: filterValue
  //   // });
  // });

  //Get all the LI from the #tabMenu UL

  // init Isotope

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
