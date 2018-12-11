'use strict'

$(document).ready(function(){	

	$(document).on('click', 'button[id^="pass"]', function() {

		var password = '007';

		var inputWord = $('#word').val();

		if(password == inputWord){
			$(".securityDiv").addClass("hidden");
			$(".ground").removeClass("hidden");
		}
		else
			alert('Проверьте пароль!');
	});

});