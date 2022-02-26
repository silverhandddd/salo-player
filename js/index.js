// Navbar hamburger menu handle
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

$(document).ready(function () {
  // Roadmap animation
  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
  ELs_inViewport.forEach((EL) => {
    Obs.observe(EL, obsOptions);
  });

  // Readmore
  $(".read-more").click(function () {
    const classLists = $(".section-concept__content")[0].classList;
    if (classLists.contains("show")) {
      $(".section-concept__content")[0].classList.remove("show");
      $(".read-more")[0].textContent = "READMORE";
    } else {
      $(".section-concept__content")[0].classList.add("show");
      $(".read-more")[0].textContent = "HIDE";
    }
    $(".section-concept__text")[0].focus();
  });

  // Mobile roadmap timeline
  $(".time").click(function (e) {
    const el = e.target.closest("li");
    if (!el) {
      return;
    }
    if (el.classList.contains("show")) {
      el.classList.remove("show");
    } else {
      el.classList.add("show");
    }
  });

  // One page scroll
  $(".main").onepage_scroll({
    sectionContainer: ".scroll", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: 1216, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical", // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });
  // Slider
  $("#section-weapon__content-slider .slider__content").slick({
    arrows: false,
  });
  $("#section-weapon__slider .slider__content").slick({
    prevArrow: "#section-weapon__slider .slider__prev",
    nextArrow: "#section-weapon__slider .slider__next",
    asNavFor: "#section-weapon__content-slider .slider__content",
  });
  $("#section-avatar__content-slider .slider__content").slick({
    arrows: false,
  });
  $("#section-avatar__slider .slider__content").slick({
    prevArrow: "#section-avatar__slider .slider__prev",
    nextArrow: "#section-avatar__slider .slider__next",
    asNavFor: "#section-avatar__content-slider .slider__content",
  });
  $("#section-protect__content-slider .slider__content").slick({
    arrows: false,
  });
  $("#section-protect__slider .slider__content").slick({
    prevArrow: "#section-protect__slider .slider__prev",
    nextArrow: "#section-protect__slider .slider__next",
    // asNavFor: "#section-protect__content-slider .slider__content",
  });
  $("#section-tokenomics__slider .slider__content").slick({
    prevArrow: "#section-tokenomics__slider .slider__prev",
    nextArrow: "#section-tokenomics__slider .slider__next",
  });
  $("#section-tokenomics__slider-mobile .slider__content").slick({
    prevArrow: "#section-tokenomics__slider-mobile .slider__prev",
    nextArrow: "#section-tokenomics__slider-mobile .slider__next",
  });
  $("#section-team__slider .slider__content").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: "#section-team__slider .slider__prev",
    nextArrow: "#section-team__slider .slider__next",
  });
});
