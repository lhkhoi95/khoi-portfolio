(function ($) {
  ("use strict");

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();

  // VIEW RESUME BUTTON
  $("#view-resume-btn").on("click", function (event) {
    event.preventDefault();

    // Create a link element
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1VzkYzf2sgK8w_EcEn3XU3zFTENfNoqpw/view?usp=sharing";
    link.target = "_blank";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  });
})(jQuery);
