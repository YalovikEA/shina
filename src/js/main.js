$(document).ready(function() {
  svg4everybody({});

  // OWL
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  });
});
