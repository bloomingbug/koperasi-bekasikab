$(window).bind("scroll resize", function () {
  var nHeader = $(".nav-header").outerWidth();
  var mHeader = $(".main-header").outerWidth();

  var scroll = $(window).scrollTop();
  var pixs = $(window).scrollTop(),
    scale = pixs / 6000 + 1,
    opacity = 1 - pixs / 750;

  if (scroll >= 20) {
    $(".main-header").addClass("sticky");
    $(".bg-menu").css("width", "" + mHeader + "px");
    $(".mega-menu").css("width", "" + mHeader + "px");
  } else {
    $(".main-header").removeClass("sticky");
    $(".bg-menu").css("width", "" + nHeader + "px");
    $(".mega-menu").css("width", "" + nHeader + "px");
  }

  $(".parallax-bg").css({
    transform: "translate3d(0, " + pixs / 3 + "px, 0)",
    opacity: opacity,
  });
});

$(".single-post article").each(function () {
  $(this).find("iframe").wrap("<figure class='single-media'></figure>");
  $(this).find("img").wrap("<figure class='single-img'></figure>");
  $(this).find("p,h1,h2,h3,h4,h5,li,figure,span").attr("data-aos", "fade-up");
});
