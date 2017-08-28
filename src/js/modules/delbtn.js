var delbtn = function() {
  $('.favoris-list .del-btn').on("click", function() {
  	event.preventDefault();
    $(this).closest('.favoris-list > li').remove();
  });

};

export default delbtn;