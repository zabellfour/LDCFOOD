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
        var player = videojs('bg-player', options, function onPlayerReady() {
            videojs.log('Your player is ready!');

            // In this context, `this` is the player that was created by Video.js.
            this.play();

            // How about an event listener?
            this.on('ended', function() {
                videojs.log('Awww...over so soon?!');
            });
        });

    });




})(jQuery);