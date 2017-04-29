$(document).ready(function () {
  
  function overlay () {
    $('.overlay').removeClass('hide');
  };

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  };
  
  function exit() {
    document.getElementById("popup-wrapper")this.setAttribute("class", "remove");
  };
  
  $( window ).on( "load", function() {
    console.log('popup works');
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 2000);
    
  });

});
