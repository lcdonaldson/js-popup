$(document).ready(function () {
  
  function overlay () {
    $('.overlay').removeClass('hide');
  }

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  }
  
  $( window ).on( "load", function() {
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 2000);
  });
  
  $('.exit').on('click', function () {
    console.log('exit works');
    $('#popup-wrapper').hide();
  });

});
