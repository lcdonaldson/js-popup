$(document).ready(function () {
  
  $( window ).on( "load", function() {
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 2000);
  });
  
  function overlay () {
    $('.overlay').removeClass('hide');
  }

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  }
  
  $('.exit').on('click', function () {
    $('#popup-wrapper').remove();
  });

});
