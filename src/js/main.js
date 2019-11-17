$(document).ready(function() {
  svg4everybody({});

  // OWL
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      // nav: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 3,
        },
      },
    });
  });
});
