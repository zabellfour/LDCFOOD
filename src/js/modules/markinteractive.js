var filterjs = function() {

    $('.m-element').mouseover(function(){
        $('.default-text').addClass('inactive');
      });
    $('.m-element').mouseout(function(){
        $('.default-text').removeClass('inactive');
      });

};

export default filterjs;