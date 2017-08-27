var filterjs = function() {

    $('.m-element').mouseover(function(){
        $('.default-text').addClass('inactive');
      });
    $('.m-element').mouseout(function(){
        $('.default-text').removeClass('inactive');
      });

    $('.m-top').mouseover(function(){
        $('.d-m-top').addClass('active');
      });
    $('.m-top').mouseout(function(){
        $('.d-m-top').removeClass('active');
      });

    $('.m-middle-left').mouseover(function(){
        $('.d-m-middle-left').addClass('active');
      });
    $('.m-middle-left').mouseout(function(){
        $('.d-m-middle-left').removeClass('active');
      });

    $('.m-middle-center').mouseover(function(){
        $('.d-m-middle-center').addClass('active');
      });
    $('.m-middle-center').mouseout(function(){
        $('.d-m-middle-center').removeClass('active');
      });

    $('.m-middle-right').mouseover(function(){
        $('.d-m-middle-right').addClass('active');
      });
    $('.m-middle-right').mouseout(function(){
        $('.d-m-middle-right').removeClass('active');
      });

    $('.m-bottom').mouseover(function(){
        $('.d-m-bottom').addClass('active');
      });
    $('.m-bottom').mouseout(function(){
        $('.d-m-bottom').removeClass('active');
      });
};

export default filterjs;