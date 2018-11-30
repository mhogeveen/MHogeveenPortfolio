$(document).ready(function() {
  $('.home a').hover(function() {
    $('#navigation').css('transition', 'border-right 300ms ease');
    $('#navigation').css('border-right', '3px solid #112f41');
  });

  $('.about-me a').hover(function() {
    $('#navigation').css('transition', 'border-right 300ms ease');
    $('#navigation').css('border-right', '3px solid #068587');
  });

  $('.skills a').hover(function() {
    $('#navigation').css('transition', 'border-right 300ms ease');
    $('#navigation').css('border-right', '3px solid #4fb99f');
  });

  $('.portfolio a').hover(function() {
    $('#navigation').css('transition', 'border-right 300ms ease');
    $('#navigation').css('border-right', '3px solid #f2b134');
  });

  $('.contact a').hover(function() {
    $('#navigation').css('transition', 'border-right 300ms ease');
    $('#navigation').css('border-right', '3px solid #ed553b');
  });
});
