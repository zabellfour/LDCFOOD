import iosDetect from './modules/detect';
import menus from './modules/menus';
import videoBanner from './modules/video-banner';
import videoBox from './modules/video-box';
import owlSlide from './modules/sliders';
import parallax from './modules/parallax';

(($) => {
  
    iosDetect();
    menus();

    videoBox();
    owlSlide();
    parallax();
  videoBanner();
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
    $('.f-attribute-list > li > label').on("click", function() {
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



})(jQuery);