$(function() {
    //quiz
    $('#quiz .fieldset .btn-next').click(function() {
        $('.fieldset.active').removeClass('active').next().addClass('active');
        console.log(1);
        return false;
    });
    $('#quiz .fieldset input').on('input', function() {  
        checkInput();
    });
    function checkInput() {
        if($('#user_name').val() && $('#user_age').val()){
            $('.btn-next').prop('disabled', false);
            return true;
        }
        else {
            $('.btn-next').prop('disabled', true);
            return false;
        }
    }

    SmoothScroll({ 
        animationTime: 800,
        stepSize: 85 
    });

    AOS.init({
        duration: 1000,
    });

    $('.gallery a').simpleLightbox();

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        lazyLoad: 'ondemand',
        prevArrow: '<img class="arrow arrow-left" src="img/reviews/arrow-left-circle.svg" alt="arrow-left">',
        nextArrow: '<img class="arrow arrow-right" src="img/reviews/arrow-right-circle.svg" alt="arrow-right">',
    });

    //  Show ymaps on scroll
    var point = $('#form-section');
    var pointTop = point.offset().top;
    var handler = function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > pointTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af9e260f4a9bda6fa194559dc9b3dbf231a510e156af062e8a4e5d3de1e3a1552&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>">');
            $(window).unbind( "scroll", handler );
        }
    };
    $(window).bind( "scroll", handler );  

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

    $('.burger').click(function() {
        $('.mobile-menu').toggleClass('active');
    });

    $('.mobile-menu a').click(function() {
        $('.burger').removeClass('active');
        $('.mobile-menu').removeClass('active');
    });
    
    // Lazyloading
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

});
