var popupclose = function() {

  $('.popup-contact .btn-close').on("click", function() {
    $(this).closest('.popup-contact').remove();
  });

};

export default popupclose;