var owlSlide = function() {


    $('.video-carousel').owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        onInitialized: adjustStretchHeader,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },

            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }

    });



    function adjustStretchHeader() {

        var el = $('.owl-carousel .video-box video');
        for (var y = 0; y < el.length; y++) {
            el[y].pause();
        }

        if ($('body').hasClass('ios')) {
            for (var t = 0; t < el.length; t++) {
                el[t].setAttribute('autoplay', 'false');
            }
        } else {


            setTimeout(function() {
                var path = el;
                var videoBox = $('.video-link');
                for (var i = 0; i < path.length; i++) {
                    seeThru.create(path[i], {
                        mask: '#video-mask-image',
                        start: 'external',
                        'poster': true
                    });
                    videoBox[i].addEventListener('mouseenter', hoverInListen(i), false);
                    videoBox[i].addEventListener('mouseleave', hoverOutListen(i), false);
                    videoBox[i].addEventListener('click', hoverOutListen(i), false);
                }

                function hoverInListen(i) {
                    return function(e) {
                        $(this).find('video')[0].play();
                        $(this).find('video')[0].muted = false;
                        $(this).addClass('hovered');
                    };
                }

                function hoverOutListen(i) {
                    return function(e) {
                        $(this).find('video')[0].pause();
                        $(this).find('video')[0].muted = true;
                        $(this).removeClass('hovered');
                    };
                }
            }, 0);
        }
    }


    $('.text-image-carousel').owlCarousel({
        nav: false,
        items: 1
    });
    $('.single-image-carousel').owlCarousel({
        nav: false,
        dots: false,
        items: 1,

        autoplay: true,
        loop: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },

            768: {
                items: 1
            }

        }
    });
    $('.logo-carousel').owlCarousel({
        nav: true,
        dots: false,
        items: 4,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

};
export default owlSlide;