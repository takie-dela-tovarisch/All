
$( document ).ready(function() {

// $( window ).resize(function() {
  if (screen.width < 769) {
    $( ".a, .b" ).removeClass("hov");
  $(".a").click(function(){
    if ($('#hehe').is(':visible')) {
      $('.bog').css('margin-top', 'calc(33.5vh - 29.5vh)')
      $('.bog').css('margin-right', 'auto')
      $( ".b" ).fadeIn();
      $( ".info" ).fadeOut();
      $('.b').animate({
        height:'67vh'},1000, "linear", function() {});
    } else {
      // alert('notvisibleeee');
      $('.b').animate({
        height:'0'},1000, "linear", function() {});
      $('.bog').css('margin-top', 'calc(72.5vh - 29.5vh)')
      $('.bog').css('margin-right', '10vw')
        setTimeout(function(){
          $( ".b" ).fadeOut();
          $( ".info" ).fadeIn();
        }, 800);
    }
  });

  $(".b").click(function(){
    if ($('#haha').is(':visible')) {
      $( ".b" ).removeClass("topic");

      $('.pant').css('margin-top', 'calc(33.5vh - 29.5vh)');
      $('.pant').css('margin-right', 'calc(50% - 23.2vw)');
      $( ".a" ).fadeIn();
      $( ".info" ).fadeOut();
      $('.a').animate({
        height:'67vh'},1000, "linear", function() {});
    } else {
      // alert('notvisibleeee');
      $( ".b" ).addClass("topic");
      $('.a').animate({
        height:'0'},1000, "linear", function() {});
      $('.pant').css('margin-top', 'calc(72.5vh - 29.5vh)')
      $('.pant').css('margin-right', '-13vw')
        setTimeout(function(){
          $( ".a" ).fadeOut();
          $( ".info" ).fadeIn();
        }, 800);
    }
  });
}
else {

  $(document).mousemove(function(e) {
  let balls = document.getElementsByClassName("pupil");
  document.onmousemove = function(){
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";

  for(let i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
  }});

  $(".a").click(function(){
    $('.b').animate({
      width:'0'},1000, "linear", function() {});
    $(".bog").css('margin-right','12vw');
  $(".a").css('margin-right', '0');
  $(".b").fadeOut();
  $( ".a" ).removeClass("hov");
  $( "#hehe" ).fadeIn();

  setTimeout(function(){
    $( ".cross" ).fadeIn();
  }, 1000);
  });

// sddsd

  $(".b").click(function(){
    $('.a').animate({
      width:'0'},1000, "linear", function() {});
    $(".pant").css('margin-right','8vw');
  $(".a").css('margin-right', '0');
  $(".a").fadeOut();
  $( ".b" ).removeClass("hov");
  $( ".cross" ).fadeIn();
  $( "#haha" ).fadeIn();
  });
  $(".cross").click(function(){
    $( ".a" ).fadeIn();
    $( ".b" ).fadeIn();
    $(".a").css('margin-right', '2.78vw');
    $( ".cross" ).fadeOut();
    $( "#haha" ).fadeOut();
    $( "#hehe" ).fadeOut();
    $('.a').animate({
      width:'100%'},1000, "linear", function() {});
    $('.b').animate({
      width:'100%'},1000, "linear", function() {});
    $( ".bog" ).removeClass("clicked");
    setTimeout(function(){
              $( ".a" ).addClass("hov");
              $( ".b" ).addClass("hov");
    }, 500);
    setTimeout(function(){
        $(".pant").css('margin-right','calc(50% - 12.2vw)');
        $(".bog").css({
          'margin-right':'auto',
          'margin-left':'auto'
        });
    }, 1000);
  });
}

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
});
