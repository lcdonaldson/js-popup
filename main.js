$(document).ready(function () {

  function overlay () {
    $('.overlay').removeClass('hide');
  }

  function openPopup() {
    $('#popup-wrapper').addClass('slide_up');
  }
<<<<<<< HEAD

  function exit() {
    document.getElementById("popup-wrapper");this.setAttribute("class", "remove");
  }

=======
  
  function exit() {
    document.getElementById("popup-wrapper");this.setAttribute("class", "remove");
  }
  
>>>>>>> 1fd1af52d542f102322c31a46281c475aad19f12
  $( window ).on( "load", function() {
    console.log('popup works');
    setTimeout(overlay, 1000);
    setTimeout(openPopup, 2000);

  });

});
