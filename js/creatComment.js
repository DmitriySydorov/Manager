$(document).ready(function() {
	'use strict';
	$('body').on('click','.textarea__block__button',function () {
		var $text= $('.textarea__block__text').val();
		var $date= new Date().toLocaleString('ru', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		var $art = $('<article>')
			.addClass('commetarie')
			.append('<h4 class="commetarie__name">'+'Гость'+'<span class="commetarie__data">'+$date+'</span>'+'</h4>')
			.append('<p class="commetarie__text">'+$text+'</p>');

		$('.commetaries')
			.append($art);

		$('.commetarie:first').remove();
		$('.textarea__block__text').val(' ');
	});

	$('.textarea__block__text').keypress(function(event){
		if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {

				var $text= $('.textarea__block__text').val();
				var $date= new Date().toLocaleString('ru', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				});
				var $art = $('<article>')
					.addClass('commetarie')
					.append('<h4 class="commetarie__name">'+'Гость'+'<span class="commetarie__data">'+$date+'</span>'+'</h4>')
					.append('<p class="commetarie__text">'+$text+'</p>');

				$('.commetaries')
					.append($art);

				$('.commetarie:first').remove();
			$('.textarea__block__text').val(' ');
		}

	});
});
