$(document).ready(function () {
  $(".slick-tab").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slick-content",
    dots: true,
    //   centerMode: true,
    focusOnSelect: true,
    infinite: false,
  });
  $(".slick-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slick-tab",
    infinite: false,
  });
});
