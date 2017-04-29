$(document).ready(function () {
  
  function overlay () {
    $('.overlay').removeClass('hide');
  };

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  };
  
  $('#exit').on("click", function () {
    console.log('works');
    $('#popup-wrapper').addClass('hide');
  });
  
  $( window ).on( "load", function() {
    console.log('popup works');
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 2000);
    
  });

});
