const burgerMenu = document.querySelector(".burger-menu");
const mobOverlay = document.querySelector(".mobile-overlay");
const navMobile = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-menu--active");
  mobOverlay.classList.toggle("mobile-overlay--active");
  navMobile.classList.toggle("nav--active");
});

navLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    burgerMenu.classList.remove("burger-menu--active");
    mobOverlay.classList.remove("mobile-overlay--active");
    navMobile.classList.remove("nav--active");
  });
});

//-----backtop-----------------------------

const backTopBtn = document.querySelector("#backtop");

backTopBtn.style.opacity = 0;
document.addEventListener("scroll", function () {
  if (window.pageYOffset > 650) {
    backTopBtn.style.opacity = 1;
  } else {
    backTopBtn.style.opacity = 0;
  }
});

//--owlCarousel-----------------
$(document).ready(function () {
  $(".loop").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    responsive: {
      900: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//------bottom-menu-----------------

$(window).resize(function () {
  if ($(window).width() >= 899) {
    $(function () {
      nav_top = $(".nav").offset().top; // запоминаем положение меню
      const navFixed = $(".nav");
      const navLink = $(".nav__link");
      $(window).scroll(function () {
        // отслеживаем событие прокрутки страницы
        if ($(window).scrollTop() > nav_top) {
          // если прокрутка дошла до меню
          if ($(".nav").css("position") != "fixed") {
            // проверяем, если меню еще не зафиксировано
            navFixed.addClass("nav--fixed");
            navLink.addClass("nav__link--add");
          }
        } else {
          // прокрутка страницы обратно вверх достигла место "перехода" меню
          if ($(".nav").css("position") == "fixed") {
            // если меню зафиксировано
            navFixed.removeClass("nav--fixed");
            navLink.removeClass("nav__link--add");
          }
        }
      });
    });
  }
});
