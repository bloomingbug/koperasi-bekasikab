var scroll = $(window).scrollTop();

if (scroll >= 15) {
  $(".kp-header").addClass("sticky");
  $(".bg-menu").removeClass("rounded-4");
  $(".bg-menu").addClass("rounded-0");
  $(".bg-menu").css("width", "" + $(".kp-header").outerWidth() + "px");
}

$(window).bind("scroll resize", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 15) {
    $(".kp-header").addClass("sticky");
    $(".bg-menu").removeClass("rounded-4");
    $(".bg-menu").addClass("rounded-0");
    $(".bg-menu").css("width", "" + $(".kp-header").outerWidth() + "px");
  } else {
    $(".kp-header").removeClass("sticky");
    $(".bg-menu").removeClass("rounded-0");
    $(".bg-menu").addClass("rounded-4");
    $(".bg-menu").css("width", "" + $(".kpnav").outerWidth() + "px");
  }
});

$(".carousel-link-terkait").slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 551,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });