var owlSlide = function() {

         
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