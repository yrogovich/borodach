$(function() {
    SmoothScroll({ 
        animationTime: 800,
        stepSize: 85 
    });

    AOS.init({
        duration: 1000,
    });

    $('.gallery a').simpleLightbox();

    var images = document.querySelectorAll('.parrallax-speed-3 img');
    new simpleParallax(images, {
        delay: 0,
        orientation: 'down',
        scale: 1.9,
        overfow: true,
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });

    var images = document.querySelectorAll('.parrallax-speed-2 img');
    new simpleParallax(images, {
        delay: 0,
        orientation: 'down',
        scale: 1.5,
        overfow: true,
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });

    var images = document.querySelectorAll('.parrallax-speed-1 img');
    new simpleParallax(images, {
        delay: 0,
        orientation: 'down',
        scale: 1.3,
        overfow: true,
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });

    // var images = document.querySelectorAll('.parrallax-speed-2 img');
    // new simpleParallax(images, {
    //     delay: 0,
    //     orientation: 'down',
    //     scale: 1.5,
    //     overfow: true,
    //     delay: .6,
	//     transition: 'cubic-bezier(0,0,0,1)'
    // });

    $('.burger').click(function() {
        $('.mobile-menu').toggleClass('active');
    });
    
    // Lazyloading
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
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
    

    // Masks for input
    //$('.phone-mask').mask('00000000');
});
