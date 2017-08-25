var callbackjs = function() {

  $('.item-button').on("click", function() {
    $('.callback').addClass('active');
    return false;
  });

  $('html').on("click", function() {
    $('.callback').removeClass('active');
  });

  $('.m-close').on("click", function() {
    $('.callback').removeClass('active');
  });
  
  $('body').on("click", function() {
    $('.callback').removeClass('active');
  });

};

export default callbackjs;