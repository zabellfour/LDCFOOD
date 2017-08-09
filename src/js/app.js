(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        $('.drop-opener').on("click", function() {
            $(this).toggleClass('opened');
            $('.drop').toggleClass('active');
        });
    });




})(jQuery);