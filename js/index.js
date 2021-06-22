
  $(document).mousemove(function(e) {

    let docWidth = $('body').width(),
    docHeight = $('body').height(),
    slidesWidth = $('.ops').width(),
    slidesHeight = $('.ops').height(),
    rangeX = slidesWidth - docWidth,
    rangeY = slidesHeight - docHeight,
    $block = $('.ops');

    $(window).on('resize', function() {
      let docWidth = $('body').width(),
      docHeight = $('body').height(),
      slidesWidth = $('.ops').width(),
      slidesHeight = $('.ops').height(),
      rangeX = slidesWidth - docWidth,
      rangeY = slidesHeight - docHeight;
    })

    $(document).on('mousemove', function(e) {
      let mouseX = e.pageX,
        percentMouse = mouseX * 100 / docWidth,
        offset = percentMouse / 100 * slidesWidth - percentMouse / 200 * docWidth,
        mouseY = e.pageY,
          percentMouseY = mouseY * 100 / docHeight,
          offsetY = percentMouseY / 100 * slidesHeight - percentMouseY / 200 * docHeight;

      $block.css({
        '-webkit-transform': 'translate3d(' + -offset + 'px,' + -offsetY + 'px,0)',
        'transform': 'translate3d(' + -offset + 'px,' + -offsetY + 'px,0)'
      });
    });
  });

// second


  $(document).ready(function(){
  $(".one, .thirteen").mouseover(function(){
    $(".back").fadeIn();
    $(".back.div").css("animation-playstate", "running");
  })
  $(".one, .thirteen").mouseout(function(){
    $(".back").fadeOut();
    $(".back.div").css("animation-playstate", "paused");
  })
  });
