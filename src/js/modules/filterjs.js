var filterjs = function() {

    $('.f-attribute-list > li > label').on("click", function(){
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

};

export default filterjs;