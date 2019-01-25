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
  $('.slider-bt').click(function() {
    $('#navigation-in').animate({'left': '-6%'});
    $('#navigation-out').animate({'left': '0'});
    //$('.container').animate({'width': '65%'});
    $('.modal').css('display', 'block');
    return false;
  });

  $('.slider, .modal').click(function() {
    $('#navigation-out').animate({'left': '-21%'});
    $('#navigation-in').animate({'left': '0'});
    //$('.container').animate({'width': '80%'});
    $('.modal').css('display', 'none');
    return false;
  });

  $('.home, .about-me, .skills, .portfolio, .contact').click(function() {
    $('#navigation-out').animate({'left': '-21%'});
    $('#navigation-in').animate({'left': '0'});
    //$('.container').animate({'width': '80%'});
    $('.modal').css('display', 'none');
  });

  $('.portfolio, .portfolio-bt').click(function() {
    $('.p-backward').click();
  });

  // Portfolio toggles
  // Return to overview button
  $('.p-backward').click(function() {
    $('.portfolio-info1, .portfolio-info2, .portfolio-info3, .portfolio-info4, .portfolio-info5, .portfolio-info6').animate({'right': '-100%'});
    $('.portfolio-overview').animate({'right': '0'});
    return false;
  });

  // Open info view
  $('.item1-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info1').animate({'right': '0'});
    return false;
  });

  $('.item2-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info2').animate({'right': '0'});
    return false;
  });

  $('.item3-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info3').animate({'right': '0'});
    return false;
  });

  $('.item4-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info4').animate({'right': '0'});
    return false;
  });

  $('.item5-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info5').animate({'right': '0'});
    return false;
  });

  $('.item6-button').click(function() {
    $('.portfolio-overview').animate({'right': '100%'});
    $('.portfolio-info6').animate({'right': '0'});
    return false;
  });

});
