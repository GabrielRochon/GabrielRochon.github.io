$(document).ready(function () {

    /* Hide skill descriptions on mobile phones until toggle */
    if ($(window).width() < 768) {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'none');
            $('.mobile-disclaimer').css('display', 'block');
        });
    } else {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'block');
            $('.mobile-disclaimer').css('display', 'none');
        });
    }

    /* Hero buttons scroll to sections */
    $('.js--scroll-to-bio').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-bio').offset().top
        }, 1000);
    });

    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-projects').offset().top
        }, 1000);
    });

    $('.js--scroll-to-skills').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-skills').offset().top
        }, 1000);
    });

    $('.js--scroll-to-resume').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-resume').offset().top
        }, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top
        }, 1000);
    });

    // Clicking on a project pic will make it flip
    var flipped = false;
    $('.project-container').click(function () {
        var effect = flipped ? 'none' : 'rotateY(180deg)';
        $(this).children('.flip-container').children('.flipper').css('transform', effect);
        flipped = !flipped;
    })

    // Clicking on a skill title on mobile will toggle descriptions
    $('.skills-col h4').click(function () {
        if ($(window).width() < 768) {
            var display = $(this).next().css('display');
            console.log(display);

            if (display === "block") {
                $(this).next().css('display', 'none');
            } else {
                $(this).next().css('display', 'block');
            }
        }
    });

    // Animations on scroll
    $('.download-button').waypoint(function (direction) {
        $(this).addClass('download-delay');
        $(this).addClass('animate__heartBeat');
    }, {
        offset: 'bottom-in-view'
    });

    // TEMPORARY: alerts user that dummy cv has been downloaded
    $('.download-button').click(function () {
        alert('This is a sample PDF file. This is not my resume. I will upload it once I am done making it.');
    })
});


$(window).on('resize', function () {
    var win = $(this);

    // Dynamically removes skills desc for mobile phones
    if (win.width() < 768) {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'none');
            $('.mobile-disclaimer').css('display', 'block');
        });
    } else {
        $('.skills-col h4').each(function () {
            $(this).next().css('display', 'block');
            $('.mobile-disclaimer').css('display', 'none');
        });
    }
});