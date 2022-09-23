$(document).ready(function () {
  $(".slider").slick({
    // centerMode: true,
    dots: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/slider/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/slider/right.svg"></button>',
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
