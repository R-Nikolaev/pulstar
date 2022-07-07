// HEADER MENU  Burger
document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    $(".menu-toggle").toggleClass("menu-toggle_active");
    $(".top-menu").toggleClass("top-menu_active");
  }

  $(".menu-toggle").click(function () {
    toggleMenu();
  });

  function closeMenu() {
    $(".menu-toggle").removeClass("menu-toggle_active");
    $(".top-menu").removeClass("top-menu_active");
  }

  $(document).click(function (e) {
    if ($(e.target).closest(".menu-container").length) return;
    closeMenu();
  });

  $(function () {
    let navbar = $(".navbar");
    let navbarHeight = navbar.height();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        navbar.addClass("navbar_fixed");
        $("body").css({
          paddingTop: navbarHeight + "px",
        });
      } else {
        navbar.removeClass("navbar_fixed");
        $("body").css({
          paddingTop: 0,
        });
      }
    });
  });

  // HEADER MENU fixed

  $("a.top-menu__link").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 86,
        },
        200
      );
  });

// INTRO toggle button

	function toggleButton() {
    $(".intro-slider__link").toggleClass("link--active");
  }
  $(".intro-slider__link").focus(function () {
    toggleButton();
  });

  // SWIPER-WRAPPER

  const introSlider = new Swiper(".intro-slider", {
    speed: 800,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 2300,
    },
    pagination: {
      el: ".intro-slider__pagination",
      clickable: true,
    },
  });
});
