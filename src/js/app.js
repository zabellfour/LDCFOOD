(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        $('.drop-opener').on("click", function() {
            $(this).toggleClass('opened');
            $('.drop').toggleClass('active');
        });
        $('.menu-opener').on("click", function() {
            $(this).toggleClass('opened');
            $('body').toggleClass('menu-open');
        });
        $('.menu-close').on("click", function() {
            $('.menu-opener').removeClass('opened');
            $('body').removeClass('menu-open');
        });

        var videos = $(".video-banner video"),
            fraction = 0.35;

        function checkScroll() {

            var video = videos[0];
            var x = video.offsetLeft,
                y = video.offsetTop,
                w = video.offsetWidth,
                h = video.offsetHeight,
                r = x + w, //right
                b = y + h, //bottom
                visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

        }

        if ($(window).width() > 1024) {
            window.addEventListener('scroll', checkScroll, false);
            $("[data-fancybox]").fancybox({
                afterShow: function() {
                    videos[0].pause();
                },
                afterClose: function() {
                    videos[0].play();
                }
            });
        }

        $(window).resize(function() {
            if ($(window).width() < 1024) {
                videos[0].pause();
            }
            if ($(window).width() > 1024) {
                videos[0].play();
            }
        });
        if ($(window).width() < 1024) {
            videos[0].pause();
        }


        $('.video-carousel').owlCarousel({
            items: 5
        });


    });


})(jQuery);