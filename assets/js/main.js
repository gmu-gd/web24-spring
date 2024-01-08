$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    nav();
    smoothScroll();
    randomList();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function clickableDiv() {
  $('.tutorial').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function nav() {
  $('.mobile-nav').click(function(){
    $('#menu').removeClass('mobile-hide');
    $('body').addClass('scroll-lock');
    $('#menu').click(function(){
      $('#menu').addClass('mobile-hide');
      $('body').removeClass('scroll-lock');
    });
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#poster"], [href*="#kinetic"], [href*="#title"]').click(function() {
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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomList(){
  var students = ["Ada", "Ayman", "Camille", "Claudia", "Eren", "Esther", "Hope", "Jared", "Jessie", "Julianne", "Kerbey", "Logan", "Nancy", "Nomin", "Ryan", "Travis", "Tre'lise", "Venice", "Yinyu", "Zubair"];
  var y;
  $('#generate').click( function(){
    $('ol').empty()
    shuffle(students);
    for (y = 0; y < students.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + students[y] + '</li>';
      $('#list').append(html);
    };
  });
}
