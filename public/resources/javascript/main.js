$(document).ready(function() {
  $('.home').hover(function() {
    $('#navigation').css('border-right', '3px solid #112f41');
    }, function() {
    $('#navigation').css('border-right', '3px solid #eef6ff');
  });

  $('.about-me').hover(function() {
    $('#navigation').css('border-right', '3px solid #068587');
    }, function() {
    $('#navigation').css('border-right', '3px solid #eef6ff');
  });

  $('.skills').hover(function() {
    $('#navigation').css('border-right', '3px solid #4fb99f');
    }, function() {
    $('#navigation').css('border-right', '3px solid #eef6ff');
  });

  $('.portfolio').hover(function() {
    $('#navigation').css('border-right', '3px solid #f2b134');
    }, function() {
    $('#navigation').css('border-right', '3px solid #eef6ff');
  });

  $('.contact').hover(function() {
    $('#navigation').css('border-right', '3px solid #ed553b');
    }, function() {
    $('#navigation').css('border-right', '3px solid #eef6ff');
  });

});
