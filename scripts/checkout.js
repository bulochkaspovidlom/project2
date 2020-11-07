$(document).ready(function() {
  $('.inputEmail').on('input', function() {
    var input = $('#' + $(this).attr('id')),
    label = input.prev().children();
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      value = re.test(input.val());
    if (value) {
      input.removeClass("invalid").addClass("valid");
      label.css('display', 'none');
    } else {
      input.removeClass("valid").addClass("invalid");
      label.css('display', 'inherit');
    }
  });

  $('.inputPassword').on('input', function() {
    var input = $('#' + $(this).attr('id')),
    label = input.prev().children();
    if (input.val()) {
      input.removeClass("invalid").addClass("valid");
      label.css('display', 'none');
    } else {
      input.removeClass("valid").addClass("invalid");
      label.css('display', 'inherit');
    }
  });

  $('.registed-buttons button').on('click', function(event) {
    var formData = $(".registed").serializeArray(),
      error = false;
    for (var input in formData) {
      var element = $("#input" + formData[input]['name']),
        star = $(".required" + formData[input]['name']),
        valid = element.hasClass("valid");
      if (valid) {
        star.css('display', 'none');
      } else {
        element.removeClass("valid").addClass("invalid");
        error = true;
      }
    }
    if (error) {
      $('.registed-error').css('opacity', '1');
      event.preventDefault();
    }
  })

  // $('.collapse.in').parent().addClass('active');
})
