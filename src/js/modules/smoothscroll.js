var smoothscroll = function() {

  $(".accelerator-block").on("click","a", function (event) { 
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
};
export default smoothscroll;