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
