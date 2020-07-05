$(document).ready(function() {
    
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
    
});