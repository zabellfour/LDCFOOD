var delbtn = function() {
  $('.favoris-list .del-btn').on("click", function() {
    $(this).closest('.favoris-list > li').remove();
  });

};

export default delbtn;