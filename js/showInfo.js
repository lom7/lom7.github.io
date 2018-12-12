'use strict'

var info = [];

$(document).ready(function(){		
	
	$(document).on('click', '#a1', function() { show(this); });


	var show = function(that){

		var selectedApartmentNumber = $("span", that)[0].innerHTML;

		for(var i=0; i < info.length; i++){
			
			if(info[i].apartmentNumber === selectedApartmentNumber){

				var infoShow = 'кв. ' + info[i].apartmentNumber + ' \n';

				for(var j=0; j<info[i].occupants.length; j++){

					infoShow += info[i].occupants[j].name  + ' ' + info[i].occupants[j].phone + ' \n';
				}

				alert(infoShow);
				break;
			}
		}
	}
});