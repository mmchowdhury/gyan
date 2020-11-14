$(document).ready(function () {

  // Hide collapsible navbar on click
  $(".navbar-nav li a").on("click", function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Smooth scrolling
  $(".nav-item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Scroll Up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  // Sticky menu
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 700) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

  // Home slider
  $(".home-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow:
      '<button type="button" class="prev_arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="next_arrow"><i class="fas fa-angle-right"></i></button>',
    speed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // About slider
  $(".about-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    speed: 500,
  });

  // Course slider
  $(".course-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<button type="button" class="prev_arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="next_arrow"><i class="fas fa-angle-right"></i></button>',
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  // Testimonial slider
  $(".testimonial-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<button type="button" class="prev_arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="next_arrow"><i class="fas fa-angle-right"></i></button>',
    speed: 500,
    asNavFor: '.testimonial-text-slider',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  
  $(".testimonial-text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    asNavFor: '.testimonial-img-slider',
  });

  // Footer slider
  $(".instagram-post").slick({
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerPadding: '10px',
        },
      },
    ],
  });

  // Counter-Up
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });
  
});
