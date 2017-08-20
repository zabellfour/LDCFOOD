var parallax = function() {

    $(window).scroll(function(e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.parallax').css('top', (0 - (scrolled * 0.11)) + 'px');
    }

};
export default parallax;