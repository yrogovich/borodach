$(function() {
    SmoothScroll({ 
        animationTime: 800,
        stepSize: 85 
    });

    AOS.init({
        duration: 1000,
    });

    $('.burger').click(function() {
        $('.mobile-menu').toggleClass('active');
    });
    
    // Lazyloading
    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 500,
        //threshold: 0,
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });
    // // Mobile burger script
    // $('.burger').click(function() {
    //     $(this).toggleClass('active');
    //     if($('.primary-menu-container').css('display') === 'flex') {
    //         $('.primary-menu-container')
    //             .fadeOut(300, function() {
    //                 if($(this).css('display') === 'none')
    //                 $(this).removeAttr('style');
    //         });
    //     } else {               
    //         $('.primary-menu-container')
    //             .css("display", "flex")
    //             .hide()
    //             .fadeIn(300, function() {
    //                 if($(this).css('display') === 'none')
    //                 $(this).removeAttr('style');
    //         });
    //     }
    // });
    

    // // Masks for input
    // $('.phone-mask').mask('+375 (00) 000-00-00');
    // $('.date-mask').mask('00/00');
    // $('.time-mask').mask('00:00');
});
