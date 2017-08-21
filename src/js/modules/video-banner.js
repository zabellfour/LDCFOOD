var videoBanner = function() {
    setTimeout(function() {
        if ($('.video-banner').length) {
            if ($(window).width() > 1024) {
                console.log(">1024");
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
                    console.log("<1024");
                    $(this)[0].pause();
                });
            }
        }
        $(window).resize(function() {
            if ($(window).width() < 1024) {
                $('.video-banner video')[0].pause();
            }
        });
    }, 500);



};
export default videoBanner;