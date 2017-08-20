var menus = function() {

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

    var markOpener = $('.mark-holder .btn');
    markOpener.on("click", function() {
        $('.deskr-wrapper').fadeOut(0);
        $('.mark-holder').css("margin-bottom", '0px');
        $(this).parent().siblings('.deskr-wrapper').fadeIn(0);
        var height = $(this).parent().siblings('.deskr-wrapper').innerHeight();
        $(this).parent().parent().css("margin-bottom", height);
    });


    var myHeader = $('#header');
    myHeader.data('position', myHeader.position());
    $(window).scroll(function() {
        if (!$('body').hasClass('menu-open')) {
            var scroll = getScroll();
            if (62 < scroll.top) {
                myHeader.addClass('hidden');
                $('body').removeClass('menu-open');
            } else {
                myHeader.removeClass('hidden');
            }
        }
    });

    var lastY;
    $(document).bind('touchmove', function(e) {
        var currentY = e.originalEvent.touches[0].clientY;
        if (!$('body').hasClass('menu-open')) {
            if (currentY > lastY) {
                $('body').removeClass('to-bottom');
                $('body').addClass('to-top');
            } else if (currentY < lastY) {
                if ($('#header').hasClass('hidden')) {
                    $('body').removeClass('to-top');
                    $('body').addClass('to-bottom');
                }
            }
        }
        lastY = currentY;
    });

    function getScroll() {
        var b = document.body;
        var e = document.documentElement;
        return {
            left: parseFloat(window.pageXOffset || b.scrollLeft || e.scrollLeft),
            top: parseFloat(window.pageYOffset || b.scrollTop || e.scrollTop)
        };
    }

};

export default menus;