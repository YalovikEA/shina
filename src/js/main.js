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


 // Filter
  // catalog filter

$(document).on('click', '.wc-container-filter-select li, .wc-container-filter-check li', function() {
    var val_filter;
    var val_filter_arr;
    var current_filter;
    var position_value;
    var this_value = $(this).find('[type="checkbox"]').attr('data-filter-slug');
    var isInputFilter = $('[type="hidden"][name="filter_' + $(this).parent().parent().find('[data-wc-filter]').attr('data-wc-filter') + '"]').length;
    if ( ! $(this).hasClass('active-check') ) {
        $(this).find('[type="checkbox"]').prop('checked','checked');
        $(this).addClass('active-check');
        if ( ! isInputFilter ) {
            $('.wc-filter-buttons [type="submit"][data-filter]').parent().prepend('<input type="hidden" name="' + 'filter_' + $(this).parent().parent().find('[data-wc-filter]').attr('data-wc-filter') + '" value="' + this_value + '" />');
        } else {
            current_filter =  $('.wc-filter-buttons [type="submit"][data-filter]').parent().find('[type="hidden"][name="' + 'filter_' + $(this).parent().parent().find('[data-wc-filter]').attr('data-wc-filter') + '"]');
            if ( current_filter.length == 0 ) {
                current_filter = $('.wc-filter-buttons [type="submit"][data-filter]').parent().prepend('<input type="hidden" name="' + 'filter_' + $(this).parent().parent().find('[data-wc-filter]').attr('data-wc-filter') + '" value="' + this_value + '" />');
            }
            val_filter = current_filter.val();
            position_value = val_filter.indexOf(this_value);
            if ( position_value == -1 ) {
                current_filter.val( val_filter + ',' + this_value );
            }
        }
    } else {
        $(this).find('[type="checkbox"]').prop('checked', '');
        $(this).removeClass('active-check');
        if ( isInputFilter ) {
            current_filter =  $('.wc-filter-buttons [type="submit"][data-filter]').parent().find('[type="hidden"][name="' + 'filter_' + $(this).parent().parent().find('[data-wc-filter]').attr('data-wc-filter') + '"]');
            val_filter = current_filter.val();
            val_filter_arr = val_filter.split(',');
            position_value = val_filter.indexOf(this_value);
            if ( position_value >= 0 ) {
                if ( val_filter_arr.length == 1 ) {
                    current_filter.remove();
                } else if ( val_filter_arr.length > 1 ) {
                    val_filter = val_filter.replace( ( val_filter.charAt(position_value - 1) == ',' ? ','+this_value : this_value+',' ), '');
                    current_filter.val( val_filter );
                }
            }
        }
    }
});

var checkerFilters = $('.wc-filter-buttons [type="hidden"][name*="filter_"]').length;
var checkingEl;
var checkValue;
var checkResult;
if ( checkerFilters > 0 ) {
    $('.wc-filter-buttons [type="hidden"][name*="filter_"]').each(function() {
        checkValue = $(this).val().split(',');
        for (var i = 0; i < checkValue.length; i++) {
            checkingEl =
                $('.wc-filter-name[data-wc-filter="' +
                    $(this).attr('name').replace('filter_','') + '"]')
                    .parent().find('ul[class*="-filter"] li');
            for (var i_ = checkingEl.length - 1; i_ >= 0; i_--) {
                checkResult =
                    checkValue[i] ==
                        $(checkingEl[i_]).find('[type="checkbox"]').attr('data-filter-slug');
                if ( checkResult ) {
                    $(checkingEl[i_]).addClass('active-check');
                    $(checkingEl[i_]).find('[type="checkbox"]').prop('checked','checked');
                }
            }
        }
    });
}

// $(document).on('click',
//     '.wc-container-filter-select .wc-filter-name, .wc-container-filter-select .wc-select-arrow', function (event) {

//     if ( ! $(this).closest('.wc-container-filter-select').hasClass('wc-active-select') ) {
//         let i = $(this).closest('.wc-container-filter-select').index()-1;
//         $('.wc-container-filter-select').not(':eq('+i+')').removeClass('wc-active-select');
//         $('.wc-container-filter-select').not(':eq('+i+')')
//             .find('.wc-select-arrow')
//             .addClass('down-arrow')
//             .removeClass('up-arrow');
//     }

//     $(this).closest('.wc-container-filter-select').toggleClass('wc-active-select');

//     if ( $(this).closest('.wc-container-filter-select').hasClass('wc-active-select') ) {
//         $(this).closest('.wc-container-filter-select')
//             .find('.wc-select-arrow')
//             .addClass('up-arrow')
//             .removeClass('down-arrow');
//     } else {
//         $(this).closest('.wc-container-filter-select')
//             .find('.wc-select-arrow')
//             .addClass('down-arrow')
//             .removeClass('up-arrow');
//     }
//     if ( $(this).hasClass('wc-select-arrow') || $(this).closest('.wc-select-arrow').length ) {
//         event.stopPropagation();
//     }
// });

$(document).on('click', function (e){
     if (
         ! $(event.target).closest(".wc-container-filter-select").length
     ) {
         DefaultStateAllFilters();
     }
    event.stopPropagation();
});
