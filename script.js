// $('#wow').css('display', 'none');




$('#nights').click(function(){
	$('#night_option').toggle();
	$(".upper").toggleClass("closed");
})

$('.crosspic').click(function(){
	$('.popup').css('display', 'none');
	$('.popbg').css('display', 'none');
})

$('.send, .button').click(function(){
	$('.popup').css('display', 'block');
	$('.popbg').css('display', 'block');
})

$('.adress').click(function(){
	if ($(".map").hasClass("none")) {
		setTimeout(function(){
			$('.map').removeClass("none");
			$('.crosspic').removeClass("none");
		}, 100);
	} else {
		setTimeout(function(){
			$('.map').addClass("none");
			$('.crosspic').addClass("none");
		}, 100);
	}
})



$('.option').click(function(){
	$('.select_text').html($(this).attr('id'));
	$('#nightselect option[value='+$(this).attr('id')+']').prop('selected', true);
	$('#night_option').toggle();
	$(".upper").toggleClass("closed");
})

if($('.wow').css('display') == 'block')
{
	$("body").css("background-color", "yellow");
}

$('body').click(function(e) {
        var target = $(e.target);

				if($('.popup').css('display') == 'block')
				{
					if(target.is('.popup, .send, .button')){
	        }else{
	            $('.popup').css('display', 'none');
							$('.popbg').css('display', 'none');
	        }
				}
    });





$('body').click(function(e) {

	var afterr = document.getElementById('name').value;
			document.getElementById('afterr').innerHTML= afterr;

	var afterrr = document.getElementById('surname').value;
			document.getElementById('afterrr').innerHTML=afterrr;

	var rufen = document.getElementById('phone-input').value;
			document.getElementById('rufen').innerHTML=rufen;

	// var which = document.getElementById('nightselect').value;
	// 		document.getElementById('which').innerHTML=which;

			var howmany = document.getElementById('svolo').value;
					document.getElementById('howmany').innerHTML=howmany;

					var when = document.getElementById('appt').value;
							document.getElementById('when').innerHTML=when;
        var target = $(e.target);

        // If there are child elements under #overlay or #btn, use
        // !target.is('#btn *')
        if(target.is('#nights, #sudba')){
        }else{
            $('#night_option').hide();
						$(".upper").toggleClass("closed");
        }

				if(document.getElementById("name").value.length == 0)
		{
			$('.float.nanana').show();
			$('.done.la').hide();
		} else {
				$('.float.nanana').hide();
				$('.done.la').show();
		}

				if(document.getElementById("surname").value.length == 0)
		{
			$('.float.susu').show();
			$('.done.lb').hide();
		} else {
				$('.float.susu').hide();
				$('.done.lb').show();
		}

			if(document.getElementById("appt").value.length == 0)
	{
		$('.timing').show();
	} else {
			$('.timing').hide();
	}

// 	if ($('.wow').is(':visible')) {
// 		$("body").css("background-color", "yellow");
// } else {
// 	$("body").css("background-color", "black");
// }
    });

		function phoneMask() {
		    var num = $(this).val().replace(/\D/g,'');
		    $(this).val(num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,6) + '-' + num.substring(6,9) + '-' + num.substring(9,11));
		}
		$('[type="tel"]').keyup(phoneMask);


		$('#sudba').click(function(){

			// $(".mur").addClass("closed");

			if ($(".mur").hasClass("closed")) {
				setTimeout(function(){
					$('.mur').removeClass("closed");
				}, 100);

			} else {
				setTimeout(function(){
					$('.mur').addClass("closed");
				}, 100);
			}


			if ($(".wow").hasClass("none")) {
				setTimeout(function(){
					$('.wow').removeClass("none");
				}, 100);

			} else {
				setTimeout(function(){
					$('.wow').addClass("none");
				}, 100);
			}
						e.stopPropagation();
		})

		$('.option_2').click(function(){
			$('.select_text_2').html($(this).attr('id'));
			$('#svolo option[value='+$(this).attr('id')+']').prop('selected', true);
			$('.wow').addClass("none");

			if ($(".mur").hasClass("closed")) {
				setTimeout(function(){
					$('.mur').removeClass("closed");
				}, 100);
			} else {
				setTimeout(function(){
					$('.mur').addClass("closed");
				}, 100);
			}
		})
