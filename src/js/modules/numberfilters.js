
var numberOfFilters = function() {

    $(function(){
        var filters = $('.f-attribute-list > li > label').children('input').length;
        $('.f-quantity').text(filters);
    });


};
export default numberOfFilters;