$(document).ready(function () {

  function overlay () {
    $('.overlay').removeClass('hide');
  }

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  }

  $( window ).on( "load", function() {
    console.log('popup works');
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 1400);
  });
  
  $('#exit').on('click', function () {
    $('#popup-wrapper').hide();
  });

});
