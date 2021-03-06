var resizeinput = function() {

    $.fn.textWidth = function(text, font) {
        
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
        
        return $.fn.textWidth.fakeEl.width();
    };

    $('.width-dynamic').on('input', function() {
        var inputWidth = $(this).textWidth();
        $(this).css({
            width: inputWidth + 11
        });
    }).trigger('input');


    function inputWidth(elem, minW, maxW) {
        elem = $(this);
    }

    var targetElem = $('.width-dynamic');

    inputWidth(targetElem);

};
export default resizeinput;