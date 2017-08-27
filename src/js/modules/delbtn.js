var delbtn = function() {

  $('.favoris-list .del-btn').on("click", function() {
    $(this).closest('.favoris-list > li').remove();
    e.stopPropagation();
  });

};

export default delbtn;