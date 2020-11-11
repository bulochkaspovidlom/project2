$(document).ready(function() {

  function getElement(data) {
    var className = data.className.split(" ");
    className = className.filter(function(item) {
      if (item.match(/[0-9]/))
        return true;
    }).join();
    return "." + className;
  }

  $('.rating')
    .on('mouseover', function(e) {
      var rating = $(e.target).data('rating'),
        elem = getElement(this);
      $(elem + ' .rating-star').removeClass('far').addClass('fas');
      $(elem + ' .rating-star#rating-' + rating + ' ~ .rating-star').removeClass('fas').addClass('far');
    })
    .on('mouseleave', function(e) {
      $('.rating-star').removeClass('fas').addClass('far');
    })
    .on('click', function(e) {
      var rating = $(e.target).data('rating'),
        elem = getElement(this);
      $(elem + ' .rating-star').removeClass('far').addClass('rating-star-selected');
      $(elem + ' .rating-star#rating-' + rating + ' ~ .rating-star').removeClass('rating-star-selected').addClass('far');
    });

  $('input[list=color]').on('input', function(e) {
    var val = $(this).val().toLowerCase();
    if (val == '') {
      $('.color__div-inner').css('display', 'none');
      return;
    }
    var colorArray = [{
      'name': 'red',
      'value': '#f16d7f'
    }, {
      'name': 'black',
      'value': '#000000'
    }, {
      'name': 'blue',
      'value': '#3949ab'
    }];
    for (var item in colorArray) {
      if (colorArray[item]['name'].match(val)) {
        $('.color__div-inner')
        .css('background-color', colorArray[item]['value'])
        .css('display', 'block');
        break;
      }
    }
  });
});
