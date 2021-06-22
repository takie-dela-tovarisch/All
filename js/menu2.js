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

    setTimeout(function(){
      $( ".first" ).clone().appendTo( ".verx" );
    }, 5000);

    setTimeout(function(){
      $( ".second" ).clone().appendTo( ".niz" );
    }, 5000);

    $(".header").click(function(){
      $(this).siblings(".content").slideToggle();
      $(this).children(".open").toggleClass("close");
      if ($(".open").hasClass("close")) {
        document.body.style.paddingBottom = '7vh'
      } else {
        document.body.style.paddingBottom = '0px'
      }
    });
    $(".a").mouseover(function(){
      $(".a").css('color', '#8C56B6');
    });
    $(".a").mouseout(function(){
      $(".a").css('color', '#E0E0E0');
    });
    $(".b").mouseover(function(){
      $(".b").css('color', '#8C56B6');
    });
    $(".b").mouseout(function(){
      $(".b").css('color', '#E0E0E0');
    });
    $(".c").mouseover(function(){
      $(".c").css('color', '#8C56B6');
    });
    $(".c").mouseout(function(){
      $(".c").css('color', '#E0E0E0');
    });
    $(".d").mouseover(function(){
      $(".d").css('color', '#8C56B6');
    });
    $(".d").mouseout(function(){
      $(".d").css('color', '#E0E0E0');
    });
    $(".e").mouseover(function(){
      $(".e").css('color', '#8C56B6');
    });
    $(".e").mouseout(function(){
      $(".e").css('color', '#E0E0E0');
    });
    $(".f").mouseover(function(){
      $(".f").css('color', '#8C56B6');
    });
    $(".f").mouseout(function(){
      $(".f").css('color', '#E0E0E0');
    });
    $(".g").mouseover(function(){
      $(".g").css('color', '#8C56B6');
    });
    $(".g").mouseout(function(){
      $(".g").css('color', '#E0E0E0');
    });
    $(".h").mouseover(function(){
      $(".h").css('color', '#8C56B6');
    });
    $(".h").mouseout(function(){
      $(".h").css('color', '#E0E0E0');
    });

    $(".i").mouseover(function(){
      $(".i").css('color', '#8C56B6');
    });
    $(".i").mouseout(function(){
      $(".i").css('color', '#E0E0E0');
    });
    $(".j").mouseover(function(){
      $(".j").css('color', '#8C56B6');
    });
    $(".j").mouseout(function(){
      $(".j").css('color', '#E0E0E0');
    });
    $(".k").mouseover(function(){
      $(".k").css('color', '#8C56B6');
    });
    $(".k").mouseout(function(){
      $(".k").css('color', '#E0E0E0');
    });
    $(".l").mouseover(function(){
      $(".l").css('color', '#8C56B6');
    });
    $(".l").mouseout(function(){
      $(".l").css('color', '#E0E0E0');
    });
    $(".mm").mouseover(function(){
      $(".mm").css('color', '#8C56B6');
    });
    $(".mm").mouseout(function(){
      $(".mm").css('color', '#E0E0E0');
    });
    $(".n").mouseover(function(){
      $(".n").css('color', '#8C56B6');
    });
    $(".n").mouseout(function(){
      $(".n").css('color', '#E0E0E0');
    });
    $(".o").mouseover(function(){
      $(".o").css('color', '#8C56B6');
    });
    $(".o").mouseout(function(){
      $(".o").css('color', '#E0E0E0');
    });
    $(".p").mouseover(function(){
      $(".p").css('color', '#8C56B6');
    });
    $(".p").mouseout(function(){
      $(".p").css('color', '#E0E0E0');
    });
    $(".q").mouseover(function(){
      $(".q").css('color', '#8C56B6');
    });
    $(".q").mouseout(function(){
      $(".q").css('color', '#E0E0E0');
    });
    $(".r").mouseover(function(){
      $(".r").css('color', '#8C56B6');
    });
    $(".r").mouseout(function(){
      $(".r").css('color', '#E0E0E0');
    });
    $(".bb").mouseover(function(){
      $(".bb").css('color', '#8C56B6');
    });
    $(".bb").mouseout(function(){
      $(".bb").css('color', '#E0E0E0');
    });
    $(".t").mouseover(function(){
      $(".t").css('color', '#8C56B6');
    });
    $(".t").mouseout(function(){
      $(".t").css('color', '#E0E0E0');
    });
    $(".u").mouseover(function(){
      $(".u").css('color', '#8C56B6');
    });
    $(".u").mouseout(function(){
      $(".u").css('color', '#E0E0E0');
    });
    $(".v").mouseover(function(){
      $(".v").css('color', '#8C56B6');
    });
    $(".v").mouseout(function(){
      $(".v").css('color', '#E0E0E0');
    });
    $(".w").mouseover(function(){
      $(".w").css('color', '#8C56B6');
    });
    $(".w").mouseout(function(){
      $(".w").css('color', '#E0E0E0');
    });
    $(".aa").mouseover(function(){
      $(".aa").css('color', '#8C56B6');
    });
    $(".aa").mouseout(function(){
      $(".aa").css('color', '#E0E0E0');
    });
  });
