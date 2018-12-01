$(document).ready(function() {

    // Change color of navigation border on hover (normal layout)
  $('.home').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #112f41');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
  });

  $('.about-me').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #068587');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
  });

  $('.skills').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #4fb99f');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
  });

  $('.portfolio').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #f2b134');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
  });

  $('.contact').hover(function() {
    $('#navigation-out').css('border-right', '3px solid #ed553b');
    }, function() {
    $('#navigation-out').css('border-right', '3px solid #eef6ff');
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
    $('.container').animate({'width': '75%'});
    return false;
  });

  $('.slider-bt').click(function() {
    $('#navigation-in').animate({'left': '-8%'});
    $('#navigation-out').animate({'left': '0'});
    $('.container').animate({'width': '65%'});
    return false;
  });

});
