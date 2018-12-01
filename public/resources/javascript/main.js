$(document).ready(function() {
  $('.home').hover(function() {
    $('#navigation').css('border-right', '3px solid #112f41');
    }, function() {
    $('#navigation').css('border-right', '3px solid #000000');
  });

  $('.about-me').hover(function() {
    $('#navigation').css('border-right', '3px solid #068587');
    }, function() {
    $('#navigation').css('border-right', '3px solid #000000');
  });

  $('.skills').hover(function() {
    $('#navigation').css('border-right', '3px solid #4fb99f');
    }, function() {
    $('#navigation').css('border-right', '3px solid #000000');
  });

  $('.portfolio').hover(function() {
    $('#navigation').css('border-right', '3px solid #f2b134');
    }, function() {
    $('#navigation').css('border-right', '3px solid #000000');
  });

  $('.contact').hover(function() {
    $('#navigation').css('border-right', '3px solid #ed553b');
    }, function() {
    $('#navigation').css('border-right', '3px solid #000000');
  });

});
