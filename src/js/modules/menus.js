var menus = function() {
    var subMenu = function() {
        $('.col-head .opener').on("click", function() {

            var totalHeight = 0;
            if ($(this).siblings('.head-menu').outerHeight(true)) {
                $(this).siblings('.head-menu').animate({ height: 0 }, 150);

            } else {

                $(this).siblings('.head-menu').children().each(function() {
                    totalHeight = totalHeight + $(this).outerHeight(true);
                });
                $(this).siblings('.head-menu').animate({ height: totalHeight }, 150);

            }
        });
    };



    subMenu();



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
        var height = $(this).parent().siblings('.deskr-wrapper').children('.deskr-inner').innerHeight();
        if ($(this).closest('.mark-holder').hasClass('wrapper-opened')) {
            $(this).closest('.mark-holder').removeClass('wrapper-opened');
            $('.mark-holder').children('.mark-box').removeClass('opened');
            $('.mark-holder').animate({ "margin-bottom": 0 });
            $(this).closest('.mark-box').siblings('.deskr-wrapper').animate({ "height": 0 });
        } else {
            if ($('.mark-holder').hasClass('wrapper-opened')) {
                $('.mark-holder').animate({ "margin-bottom": 0 });
                $('.deskr-wrapper').animate({ "height": 0 });
            }
            $('.mark-holder').removeClass('wrapper-opened');
            $('.mark-holder').children('.mark-box').removeClass('opened');
            $(this).parent().parent().animate({ "margin-bottom": height+20 });
            $(this).parent().parent().addClass('wrapper-opened').children('.mark-box').addClass('opened');
            $(this).closest('.mark-box').siblings('.deskr-wrapper').animate({ "height": height });
        }
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