$( document ).ready(function() {
  // mobile
  $(".lines").click(function(){
    $(".rooms").slideToggle();
    $(".lina, .linb, .linc, .lind, .linee, .linf").toggleClass("zero");
    setTimeout(function(){
      $(".razdel").toggle();
      $(".lina, .linb, .linc, .lind, .linee, .linf").toggle();
      $(".trick").toggleClass("tenn");
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
                  $(".trick").toggleClass("tenn");
                }, 300);
            }
          }
      });

      // mobile


  var timesClicked = 0;

  $(".square").click(function() {
    timesClicked++;

    if (timesClicked==2) {
      $(this).removeClass("s_1");
      $(this).addClass("s_2");
    } if (timesClicked==3) {
      $(this).removeClass("s_2");
      $(this).addClass("s_3");
    } if (timesClicked==4) {
      $(this).removeClass("s_3");
      $(this).addClass("s_4");
        setTimeout(function(){
          timesClicked = 0;
          }, 100);
    } if (timesClicked==1) {
      $(this).addClass("s_1");
      $(this).removeClass("s_4");
    }
  })

  $(".mo").click(function(){
    $(this).toggleClass("mobdeg");
  })

  if (screen.width < 769) {
    $(".score").click(function(){

              if ($(".m1").hasClass("mobdeg") && $(".m2").hasClass("mobdeg") && $(".m3").hasClass("mobdeg") && $(".m4").hasClass("mobdeg")) {
                $(".yeah").css('display','block');

                setTimeout(function(){
                  $(".ah").css('opacity','1');
                  $(".hh").css('opacity','1');
                }, 500);

                setTimeout(function(){
                  $(".bh").css('opacity','1');
                  $(".gh").css('opacity','1');
                }, 900);

                setTimeout(function(){
                  $(".ch").css('opacity','1');
                  $(".fh").css('opacity','1');
                }, 1300);

                setTimeout(function(){
                  $(".dh").css('opacity','1');
                  $(".eh").css('opacity','1');
                }, 1700);

                setTimeout(function(){
                  $(".yeah").css('opacity','0');
                }, 11900);

                setTimeout(function(){
                  $(".yeah").css('display','none');
                }, 12000);
              } else {
                $(".fail").css('display','block');

                setTimeout(function(){
                  $(".one").css('opacity','1');
                  $(".fifteen").css('opacity','1');
                }, 500);

                setTimeout(function(){
                  $(".two").css('opacity','1');
                  $(".fourteen").css('opacity','1');
                }, 700);

                setTimeout(function(){
                  $(".three").css('opacity','1');
                  $(".thirteen").css('opacity','1');
                }, 900);

                setTimeout(function(){
                  $(".four").css('opacity','1');
                  $(".twelve").css('opacity','1');
                }, 1100);

                setTimeout(function(){
                  $(".five").css('opacity','1');
                  $(".eleven").css('opacity','1');
                }, 1300);

                setTimeout(function(){
                  $(".six").css('opacity','1');
                  $(".ten").css('opacity','1');
                }, 1500);

                setTimeout(function(){
                  $(".seven").css('opacity','1');
                  $(".nine").css('opacity','1');
                }, 1700);

                setTimeout(function(){
                  $(".eight").css('opacity','1');
                }, 1900);

                setTimeout(function(){

                  $( ".ups" ).each(function(index) {
                    $(this).hover(function() {
                      $( this ).addClass("none");
                      if(document.getElementsByClassName("none").length == 15) {
                        $(".fail").css('display','none');
                      }
                    });
                  });

                }, 2000);

              }

      setTimeout(function(){
        $(".game").css('display','none');
        $(".mobik").css('display','block');
      }, 2000);
    })
  }

  else {
    $(".score").click(function(){

              if ($(".e").hasClass("s_4") && $(".g").hasClass("s_4") && $(".h").hasClass("s_4") && $(".k").hasClass("s_4")) {
                $(".yeah").css('display','block');

                setTimeout(function(){
                  $(".ah").css('opacity','1');
                  $(".hh").css('opacity','1');
                }, 500);

                setTimeout(function(){
                  $(".bh").css('opacity','1');
                  $(".gh").css('opacity','1');
                }, 900);

                setTimeout(function(){
                  $(".ch").css('opacity','1');
                  $(".fh").css('opacity','1');
                }, 1300);

                setTimeout(function(){
                  $(".dh").css('opacity','1');
                  $(".eh").css('opacity','1');
                }, 1700);

                setTimeout(function(){
                  $(".yeah").css('opacity','0');
                }, 11900);

                setTimeout(function(){
                  $(".yeah").css('display','none');
                }, 12000);
              } else {
                $(".fail").css('display','block');

                setTimeout(function(){
                  $(".one").css('opacity','1');
                  $(".fifteen").css('opacity','1');
                }, 500);

                setTimeout(function(){
                  $(".two").css('opacity','1');
                  $(".fourteen").css('opacity','1');
                }, 700);

                setTimeout(function(){
                  $(".three").css('opacity','1');
                  $(".thirteen").css('opacity','1');
                }, 900);

                setTimeout(function(){
                  $(".four").css('opacity','1');
                  $(".twelve").css('opacity','1');
                }, 1100);

                setTimeout(function(){
                  $(".five").css('opacity','1');
                  $(".eleven").css('opacity','1');
                }, 1300);

                setTimeout(function(){
                  $(".six").css('opacity','1');
                  $(".ten").css('opacity','1');
                }, 1500);

                setTimeout(function(){
                  $(".seven").css('opacity','1');
                  $(".nine").css('opacity','1');
                }, 1700);

                setTimeout(function(){
                  $(".eight").css('opacity','1');
                }, 1900);

                setTimeout(function(){

                  $( ".ups" ).each(function(index) {
                    $(this).hover(function() {
                      $( this ).addClass("none");
                      if(document.getElementsByClassName("none").length == 15) {
                        $(".fail").css('display','none');
                      }
                    });
                  });

                }, 2000);

              }

      setTimeout(function(){
        $(".game").css('display','none');
        $(".deskk").css('display','block');
      }, 2000);
    })
  }





  $(".redo").click(function(){
    window.location.reload();
  })
});
