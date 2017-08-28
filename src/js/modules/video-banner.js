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
            if ($('.video-banner').length) {
                if ($(window).width() < 1024) {
                    $('.video-banner video')[0].pause();
                }
            }
        });
    $(".fancybox-close-small").click(function() {
        $(".fancybox-inner video").click();

    });

    $(document).on('afterShow.fb', function(e, instance, slide) {
        $('.fancybox-slide video')[0].play();
    });

};
export default videoBanner;