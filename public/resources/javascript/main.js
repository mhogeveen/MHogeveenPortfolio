$(document).ready(function() {

  // Change color of navigation border on hover (normal layout)
  $('.slider').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #666666');
    $('.slider .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.slider .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  $('.home').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #112f41');
    $('.home .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.home .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  $('.about-me').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #068587');
    $('.about-me .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.about-me .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  $('.skills').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #4fb99f');
    $('.skills .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.skills .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  $('.portfolio').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #f2b134');
    $('.portfolio .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.portfolio .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  $('.contact').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #ed553b');
    $('.contact .icon').css('color', '#eef6ff');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
    $('.contact .icon').css('color', 'rgba(0, 0, 0, 0)');
  });

  // Change color of navigation border on hover (button layout)
  $('.slider-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #666666');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  $('.home-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #112f41');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  $('.about-me-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #068587');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  $('.skills-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #4fb99f');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  $('.portfolio-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #f2b134');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  $('.contact-bt').hover(function() {
    $('#navigation-in').css('border-right', '3px solid #ed553b');
    }, function() {
    $('#navigation-in').css('border-right', '3px solid #eef6ff');
  });

  // Toggle between menu styles
  $('.slider').click(function() {
    $('#navigation-out').animate({'left': '-21%'});
    $('#navigation-in').animate({'left': '0'});
    $('.container').animate({'width': '80%'});
    return false;
  });

  $('.slider-bt').click(function() {
    $('#navigation-in').animate({'left': '-6%'});
    $('#navigation-out').animate({'left': '0'});
    $('.container').animate({'width': '65%'});
    return false;
  });

  // Portfolio toggles
  // Return to overview button
  $('.p-backward').click(function() {
    $('.portfolio-info').animate({'right': '-100%'});
    $('.portfolio-overview').animate({'right': '0'});
    return false;
  });

  // Open info view
  $('.colmar').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info').animate({'right': '0'});
    return false;
  });

});
