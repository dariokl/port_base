$(document).ready(function() {
    $(".img3, .img10, .img9, .img8, .r_img2, .about_2, .j, .d, .t").hover(function() {
        $('.img3').addClass('scaleup');
        $('.img7').addClass('scaleup');
        $('.img8').addClass('bob-on-hover');
        $('.img9').addClass('bob-on-hover-left');
        $('.img10').addClass('bob-on-hover');
        $('.img11').addClass('bob-on-hover-left');
        $('.r_img2').addClass('bob-on-hover');
        $('.r_img3').addClass('bob-on-hover-left');
        $('.r_img4').addClass('bob-on-hover-left');
        $('.about_2').addClass('bob-on-hover');
        $('.about_6').addClass('bob-on-hover-left');

    }, function() {
        $('.img3').removeClass('scaleup');
        $('.img7').removeClass('scaleup');
        $('.img8').removeClass('bob-on-hover');
        $('.img9').removeClass('bob-on-hover-left');
        $('.img10').removeClass('bob-on-hover');
        $('.img11').removeClass('bob-on-hover-left');
        $('.r_img2').removeClass('bob-on-hover');
        $('.r_img3').removeClass('bob-on-hover-left');
        $('.r_img4').removeClass('bob-on-hover-left');
        $('.button').removeClass('bob-on-hover');
        $('.about_2').removeClass('bob-on-hover');
        $('.about_6').removeClass('bob-on-hover-left');
    });

  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

});