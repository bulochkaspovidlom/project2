$(document).ready(function() {
  $('.sidebar-item-link').on('click', function(e) {
    var $this = $(this);
    if ($this.find('.fa-caret-down').hasClass('fa-caret__active')) {
      $this.find('.fa-caret-down').removeClass('fa-caret__active');
      return;
    }
    $('.sidebar-item-link').find('.fa-caret-down').removeClass('fa-caret__active');
    $this.find('.fa-caret-down').addClass('fa-caret__active');
  })

  var initialMinValue = 52,
    initialMaxValue = 400;
  $('.range__input__min').text('$' + initialMinValue);
  $('.range__input__max').text('$' + initialMaxValue);

  $("#range__input").ionRangeSlider({
    type: "double",
    min: 0,
    max: 600,
    from: initialMinValue,
    to: initialMaxValue,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    onChange: function(data) {
      $('.range__input__min').text('$' + data.from);
      $('.range__input__max').text('$' + data.to);
    }
  });
})
