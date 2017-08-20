var videoBanner = function() {

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

	        if ($(".video-banner video").lengh) {
	            var videos = $(".video-banner video"),
	                fraction = 0.35;

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
	        }

};
export default videoBanner;