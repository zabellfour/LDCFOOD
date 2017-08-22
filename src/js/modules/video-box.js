var videoBox = function() {



        var path = $('.video-box video');
        var videoBox = $('.video-link');
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
 



};
export default videoBox;