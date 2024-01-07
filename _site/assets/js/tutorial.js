$(document).ready(function() {
    // run function on initial page load
    lightbox();
    subnav();
    smoothScroll();
    fixSub();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function lightbox() {
  $('.interior img').click(function() {
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

function subnav() {
  function disp( h3s ) {
    var a = [];
    var b = [];
    var scroll_pos = 0;
    for ( var i = 0; i < h3s.length; i++ ) {
      a.push( h3s[ i ].innerHTML );
    }
    for ( var j = 0; j < a.length; j++ ) {
      var k = j + 1;
      $('aside ul').append('<li id="h' + k + '">' + '<a href="#step' + k + '">' + a[j] +'</a></li>');
    }
    for ( var l = 0; l < a.length; l++ ) {
      var m = l + 1;
      b.push(($('#step' + m).position().top) - 100);
    }
    $(document).on("scroll", function() {
      scroll_pos = $(this).scrollTop();
      for ( var n = 0; n < b.length; n++) {
        var o = n + 1;
        if(scroll_pos > b[n]) {
          $('[href*="#"]').removeClass('active');
          $('[href*="#step' + o + '"]').addClass('active');
        }
      }
    });
  }
  disp( $('h3 span').toArray() );
}
function fixSub() {
  var scroll_pos = 0;
  var aside_pos = ($('aside').position().top) - 25;
  $(document).on("scroll", function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > aside_pos) {
      $('aside').addClass('sub-fixed');
      $('.tutorial-page').addClass('sub-space');
    } else {
      $('aside').removeClass('sub-fixed');
      $('.tutorial-page').removeClass('sub-space');
    }
  });
}

function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#s"]').click(function() {
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
