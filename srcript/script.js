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
  ],
});

$(".footerClientReviews__slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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

//category page card color tabs
const productActiveImage = $(
  ".category__card__list .cat__product__card a .active__image"
);
const activeTab = $(
  ".category__card__list .cat__product__card .color__tabs li a"
);
activeTab.each(function () {
  $(this).click(function () {
    const target = $(this).data("image");
    activeTab.removeClass("active");
    $(this).addClass("active");
    $(this)
      .closest(".cat__product__card")
      .find(".active__image")
      .attr("src", target);
  });
});

//product page slider
$(document).ready(function () {
  $(".single__product_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: ".thumbnails__products_slider",
    infinite: false,
  });
  $(".thumbnails__products_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".single__product_slider",
    dots: false,
    centerMode: true,
    centerPadding: "10px",
    focusOnSelect: true,
  });
  // $(".thumbnails__products_slider").on(
  //   "click",
  //   ".slick-slide",
  //   function (event) {
  //     event.preventDefault();
  //     var goToSingleSlide = $(this).data("slick-index");

  //     $(".single__product_slider").slick("slickGoTo", goToSingleSlide);
  //   }
  // );
});

//assembly list toggle button

$(".assembly__list .add__btn").each(function () {
  let toggleButton = true;
  $(this).click(function () {
    if (toggleButton) {
      toggleButton = false;
      $(this).text("Remove");
    } else {
      toggleButton = true;
      $(this).text("Add");
    }
  });
});

//verity content toggle
let verityToggleButton = $(
  ".product__verity .verity__list .verity__item .toggleButton"
);
verityToggleButton.each(function () {
  $(this).click(function () {
    $(this).closest(".verity__item").find(".verity__content").slideToggle();
  });
});

//dimension content toggle
$("#dimension__button").click(function () {
  $("#dimension__content").slideToggle();
});

// people also like slider
$(".people__might__like__product__slider").slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3.5,
  slidesToScroll: 3,
  autoPlay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
});

// mobile submenu click to menu
$(".back__to__menu").each(function () {
  $(this).click(function () {
    $(this).closest(".vertical__dropdownMenu").removeClass("open");
  });
});

$(".open__submenu").each(function () {
  $(this).click(function () {
    console.log("hello");
    $(this)
      .closest(".nav__dropdown")
      .find(".vertical__dropdownMenu")
      .addClass("open");
  });
});

// add and save products items
$(".add__and__save__products .yes").click(function () {
  $(this).addClass("active");
  $(this)
    .closest(".add__and__save__products")
    .find(".no")
    .removeClass("active");
  $("#save__item__list").slideDown();
});
$(".add__and__save__products .no").click(function () {
  $(this).addClass("active");
  $(this)
    .closest(".add__and__save__products")
    .find(".yes")
    .removeClass("active");
  $("#save__item__list").slideUp();
});

// more payment options

$("#show__more__payment__info").click(function () {
  $("#more__payment__info__popup__wrapper").toggle();
});
$("#hide__more__payment__info").click(function () {
  $("#more__payment__info__popup__wrapper").hide();
});
$;

// cart value increase and descrease

$(".cart__count .product__plus").click(function (e) {
  e.preventDefault();
  const curValue = parseInt($(".cart__count input").val());
  $(".cart__count input").val(curValue + 1);
});
$(".cart__count .product__minus").click(function (e) {
  e.preventDefault();
  const curValue = parseInt($(".cart__count input").val());
  if (curValue > 1) {
    $(".cart__count input").val(curValue - 1);
  }
});

//order switches summary fixed position

const postionOfSwitchesStart = $(".order__watches").position().top;
const postionOfSwitchesEnd = $(".order__watches")[0].scrollHeight + postionOfSwitchesStart.top;

console.log(postionOfSwitchesStart, postionOfSwitchesEnd);

$(window).on("scroll", function () {
  var scrollTop = $(this).scrollTop();
  // console.log(scrollTop)
  if (scrollTop > postionOfSwitchesStart && scrollTop < postionOfSwitchesEnd) { 
    $(".order__swatches__summary").addClass("scrolled");
  } else {
    $(".order__swatches__summary").removeClass("scrolled");
  }
});
