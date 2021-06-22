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

    var counter = 0;
    var image = document.getElementById("a");

    var requestAnimationFrame = window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

requestAnimationFrame(updateValue);


function updateValue() {
var textField = document.getElementById("results");
var imageTopPosition = getComputedStyle(image).top;

textField.textContent = imageTopPosition;

requestAnimationFrame(updateValue);

$( ".four, .five, .six" ).click(function() {
$("#a").css({'top' : imageTopPosition});
$("#c").css({'top' : imageTopPosition});
$("#b").css({'top' : imageTopPosition});
$("#a").removeClass("animate");
$("#c").removeClass("animate");
$("#b").removeClass("animate");
$(".moving").fadeOut();
$(".po").removeClass("addhover");
document.getElementById('ress').innerHTML = "горячие научные лекции в boomshh!!";

$( "#never" ).mouseover(function() {
  $(this).css('background', '#8C56B6');
});
$( "#never" ).mouseout(function() {
  $(this).css('background', 'transparent');
});

$('#never').click(function(){
  $("#a").addClass("animate");
  $("#b").addClass("animate");
  $("#c").addClass("animate");
  $(".moving").fadeIn();
  $(".res2").hide();
  $(".res2 h1").hide();
  $(".po").addClass("addhover");

  $( "#never" ).mouseover(function() {
    $(this).css('background', 'transparent');
  });
})

setTimeout(function(){
  $("#a").css('top', '-100%');
  $("#b").css('top', '-100%');
  $("#c").css('top', '-100%');
}, 800);
setTimeout(function(){
  $(".res2").show();
  $(".res2 h1").show();
}, 1200);
});

$( ".one, .two, .three" ).click(function() {
$("#a").css({'top' : imageTopPosition});
$("#c").css({'top' : imageTopPosition});
$("#b").css({'top' : imageTopPosition});
$("#a").removeClass("animate");
$("#c").removeClass("animate");
$("#b").removeClass("animate");
$(".moving").fadeOut();
$(".po").removeClass("addhover");
document.getElementById('ress').innerHTML = "новые блюда и напитки в ресторане";


$( "#never" ).mouseover(function() {
  $(this).css('background', '#8C56B6');
});
$( "#never" ).mouseout(function() {
  $(this).css('background', 'transparent');
});

$('#never').click(function(){
  $("#a").addClass("animate");
  $("#b").addClass("animate");
  $("#c").addClass("animate");
  $(".moving").fadeIn();
  $(".res2").hide();
  $(".res2 h1").hide();

  $( "#never" ).mouseover(function() {
    $(this).css('background', 'transparent');
  });
})

setTimeout(function(){
  $("#a").css('top', '0%');
  $("#b").css('top', '0%');
  $("#c").css('top', '0%');
}, 800);
setTimeout(function(){
  $(".res2").show();
  $(".res2 h1").show();
}, 1200);
});

$( ".seven, .eight, .nine" ).click(function() {
$("#a").css({'top' : imageTopPosition});
$("#c").css({'top' : imageTopPosition});
$("#b").css({'top' : imageTopPosition});
$("#a").removeClass("animate");
$("#c").removeClass("animate");
$("#b").removeClass("animate");
$(".moving").fadeOut();
$(".po").removeClass("addhover");
document.getElementById('ress').innerHTML = "жаркая (ага!) киноночь в ресторане";


$( "#never" ).mouseover(function() {
  $(this).css('background', '#8C56B6');
});
$( "#never" ).mouseout(function() {
  $(this).css('background', 'transparent');
});

$('#never').click(function(){
  $("#a").addClass("animate");
  $("#b").addClass("animate");
  $("#c").addClass("animate");
  $(".moving").fadeIn();
  $(".res2").hide();
  $(".res2 h1").hide();

  $( "#never" ).mouseover(function() {
    $(this).css('background', 'transparent');
  });
})

setTimeout(function(){
  $("#a").css('top', '-201%');
  $("#b").css('top', '-201%');
  $("#c").css('top', '-201%');
}, 800);
setTimeout(function(){
  $(".res2").show();
  $(".res2 h1").show();
}, 1200);
});

$( ".ten, .eleven, .twelve" ).click(function() {
$("#a").css({'top' : imageTopPosition});
$("#c").css({'top' : imageTopPosition});
$("#b").css({'top' : imageTopPosition});
$("#a").removeClass("animate");
$("#c").removeClass("animate");
$("#b").removeClass("animate");
$(".moving").fadeOut();
$(".po").removeClass("addhover");
document.getElementById('ress').innerHTML = "горячие акции и скидки в boomshh!!";


$( "#never" ).mouseover(function() {
  $(this).css('background', '#8C56B6');
});
$( "#never" ).mouseout(function() {
  $(this).css('background', 'transparent');
});

$('#never').click(function(){
  $("#a").addClass("animate");
  $("#b").addClass("animate");
  $("#c").addClass("animate");
  $(".moving").fadeIn();
  $(".res2").hide();
  $(".res2 h1").hide();

  $( "#never" ).mouseover(function() {
    $(this).css('background', 'transparent');
  });
})

setTimeout(function(){
  $("#a").css('top', '-301.5%');
  $("#b").css('top', '-301.5%');
  $("#c").css('top', '-301.5%');
}, 800);
setTimeout(function(){
  $(".res2").show();
  $(".res2 h1").show();
}, 1200);
});

}
  });
