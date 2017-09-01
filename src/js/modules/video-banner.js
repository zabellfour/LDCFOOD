var videoBanner = function() {
    setTimeout(function() {
        if ($('.video-banner').length) {
            if ($(window).width() > 1024) {

                $(window).scroll(function() {
                    $('.video-banner video').each(function() {
                        if ($(this).is(":in-viewport(150)")) {
                            $(this)[0].play();
                        } else {
                            $(this)[0].pause();
                        }
                    });
                });
            } else {
                $('.video-banner video').each(function() {
                    $(this)[0].pause();
                });
            }
        }
    }, 500);
    
    $(window).resize(function() {
        if ($('.video-banner  video').length) {
            if ($(window).width() < 1024) {
                $('.video-banner video')[0].pause();
            }
        }
    });


    $(document).on('afterShow.fb', function() {
        if ($('.fancybox-slide video').length) {
            $('.fancybox-slide video')[0].play();
        }


    });

    $("[data-fancybox]").fancybox({
        beforeClose: function(instance, current, e) {

            if ($('.fancybox-slide video').length) {
                $('.fancybox-slide video')[0].pause();
            }

        }
    });

};
export default videoBanner;