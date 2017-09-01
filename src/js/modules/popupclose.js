var popupclose = function() {

  $('.popup-contact .btn-close').on("click", function() {
    $(this).closest('.popup-contact').remove();
    $('.static-header').removeClass('form-sent-success');
  });

};

export default popupclose;