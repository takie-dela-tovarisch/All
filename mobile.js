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
