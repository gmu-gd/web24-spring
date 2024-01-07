$(document).ready(function() {
    // run function on initial page load
    lightbox();
    smoothScroll();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function lightbox() {
  $('img').click(function() {
    var imgSrc = $(this).attr('src');
    imgSrc = "url('" + imgSrc + "')";
    $('#lightbox').removeClass('hidden');
    $('#lightbox-dim').removeClass('hidden');
    $('body').addClass('scroll-lock');
    $('#lightbox').css("background-image", imgSrc);
    $('#lightbox').click(function() {
      $('#lightbox').addClass('hidden');
      $('#lightbox-dim').addClass('hidden');
      $('body').removeClass('scroll-lock');
    })
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('body, html').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
  });
}
