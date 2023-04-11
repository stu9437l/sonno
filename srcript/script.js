$(".bestSellers__slider").slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  // mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".clientsReview__slider").slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoPlay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".footerClientReviews__slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay:true,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});

// mobile nav dropdown
let toggleDropdownIcon = true;
$(".mobile__nav .navLinks__list .nav__dropdown").click(function () {
  $(this).find(".vertical__dropdownMenu").slideToggle();
  $(this).find(".open__btn i").toggleClass("bi-chevron-up");
});

//search input popup

$("#search__icon").click(function () {
  $(".search__toggle__content").slideUp();
  $("#mobile__popup__wrapper").slideDown();
});
$("#close__mobile__popup").click(function () {
  $(".search__toggle__content").slideDown();
  $("#mobile__popup__wrapper").slideUp();
});

//footer accordion
$(".top__footer .footer__content .title").click(function () {
  $(this).closest(".footer__content").find(".footerLinks__list").slideToggle();
  $(this).find("i").toggleClass("rotate__180");
});
