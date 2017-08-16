	(($) => {


	    // When DOM is ready
	    function iOS() {

	        var iDevices = [
	            'iPad Simulator',
	            'iPhone Simulator',
	            'iPod Simulator',
	            'iPad',
	            'iPhone',
	            'iPod'
	        ];

	        if (!!navigator.platform) {
	            while (iDevices.length) {
	                if (navigator.platform === iDevices.pop()) { return true; }
	            }

	        }

	        return false;
	    }
	    if (iOS()) {
	        $('body').addClass('ios');



	    } else {

	        var el = $('.video-box video');
	        for (var t = 0; t < el.length; t++) {
	            el[t].pause();
	        }
	    }
	    $(() => {

	        $('.products-box .opener').on("click", function() {
	            $(this).parent().toggleClass('opened');
	        });

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

	        $('.item-button').on("click", function() {
	            $('.callback').addClass('active');
	            return false;
	        });


	        $('html').on("click", function() {
	            $('.callback').removeClass('active');
	        });

	        $('.m-close').on("click", function() {
	            $('.callback').removeClass('active');
	        });

	        $('body').on("click", function() {
	            $('.callback').removeClass('active');
	        });


	        $('.f-attribute-list > li').on("click", function() {
	            $(this).toggleClass('selected');
	            return false;
	        });

	        $('.m-filter-opener').on("click", function() {
	            $(this).toggleClass('opened');
	            $('body').toggleClass('m-filter-open');
	        });

	        $('.m-filter-close').on("click", function() {
	            $('.m-filter-opener').removeClass('opened');
	            $('body').removeClass('m-filter-open');
	        });

	        var $window = $(window),
	            $nst = $('.nst-component');
	        $('.mask').on("click", function() {
	            $('.m-filter-opener').removeClass('opened');
	            $('body').removeClass('m-filter-open');
	        });

	        (function($) {
	            var $window = $(window),
	                $nst = $('.nst-component');


	            function resize() {
	                if ($window.width() < 768) {
	                    return $nst.addClass('nst-is-collapsed');
	                }

	                $nst.removeClass('nst-is-collapsed');
	            }

	            $window
	                .resize(resize)
	                .trigger('resize');
	        })(jQuery);

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

	            nav: true,
	            dots: false,
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

	        var path = $('.video-box video');
	        var videoBox = $('.popup-link');


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
	                $(this).addClass('hovered');
	            };
	        }

	        function hoverOutListen(i) {
	            return function(e) {
	                $(this).find('video')[0].pause();
	                $(this).removeClass('hovered');
	            };
	        }

	    });

	})(jQuery);