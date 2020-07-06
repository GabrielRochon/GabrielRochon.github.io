$(document).ready(function() {
    
    /* Tooltipster */
    $('.tooltip').tooltipster({
        plugins: ['follower'],
        theme: ['tooltipster-shadow', 'tooltipster-shadow-customized']
    });
    
    /* Hero buttons scroll to sections */
    $('.js--scroll-to-projects').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-skills').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-resume').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-resume').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-contact').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });
    
    
    /* B&W blur effect when hover on project div */
    $('.project-container').hover(function() {
        $(this).children('img').addClass('blur-effect');
    });
    
    $('.project-container').mouseleave(function() {
        $(this).children('img').removeClass('blur-effect');
    });
    
    
    /* Project pic click will make it zoom in */
    $('.project-container img').click(function() {
        $(this).popImg();
    });
    
    $('.skills-col h4').click(function() {
        var display = $(this).next().css('display');
        console.log(display);
        
        if(display === "block") {
            $(this).next().css('display', 'none');
        } else {
            $(this).next().css('display', 'block');
        }
    });
});



$(window).on('resize', function(){
      var win = $(this);
    
      // Dynamically removes skills desc for mobile phones
      if (win.width() < 768) {
          $('.skills-col h4').each(function() {
              $(this).next().css('display', 'none');
          });
      }
});