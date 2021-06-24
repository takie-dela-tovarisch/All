
$( document ).ready(function() {

// mobile
$(".lines").click(function(){
  $(".rooms").slideToggle();
  $(".lina, .linb, .linc, .lind, .linee, .linf").toggleClass("zero");
  setTimeout(function(){
    $(".razdel").toggle();
    $(".lina, .linb, .linc, .lind, .linee, .linf").toggle();
    $(".trick").toggleClass("ten");
  }, 300);
});


$('body').click(function(e) {
        var target = $(e.target);
        if ($('.razdel').is(':visible')) {
          if(target.is(".appear a, .lines")){
          }else{
              $('.rooms').slideUp();
              $(".lina, .linb, .linc, .lind, .linee, .linf").toggle();
              setTimeout(function(){
                $(".razdel").hide();
                $(".lina, .linb, .linc, .lind, .linee, .linf").toggleClass("zero");
                $(".trick").toggleClass("ten");
              }, 300);
          }
        }
    });

    // mobile


    $(function(){
        $(window).bind("resize",function(){
            if (screen.width < 769) {
              $(".ornament, .test, .bon").addClass("none");
          } else if (screen.width > 769) {
          $(".ornament, .test, .bon").removeClass("none");
          }
        })
    })



    if (screen.width < 769) {
      $(".ornament, .test, .bon").addClass("none");
      $("#vobsh").click(function(){
        $(this).toggleClass("inthe");
        $("#vobsh h1").toggleClass("h");
        $("#vobshs").slideToggle();
        $("#a").slideToggle();
      });
      $(".yesterday").click(function(){
        $(this).toggleClass("inthe");
        $(".yesterday h1").toggleClass("h");
        $("#vcherar").slideToggle();
        $("#vchera").toggleClass("none");
      });
      $(".level").click(function(){
        $(this).toggleClass("inthe");
        $(".level h1").toggleClass("h");
        $("#level").slideToggle();
        $(".noteb, #a").slideToggle();
        $("#levelo, .test").toggleClass("none");
      });
      $(".work").click(function(){
        $(this).toggleClass("inthe");
        $(".work h1").toggleClass("h");
        $("#work").slideToggle();
        $("#worko, .bon").toggleClass("none");
      });
} else {
  $(".ornament, .test, .bon").removeClass("none");
}

});


var slideIndex = 1;
// showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("page");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}
