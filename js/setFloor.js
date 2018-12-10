'use strict'
$(document).ready(function(){	

	$(document).on('click', 'div[id^="fa14"]', function() {showFloor(14);});
	$(document).on('click', 'div[id^="fa13"]', function() {showFloor(13);});
	$(document).on('click', 'div[id^="fa12"]', function() {showFloor(12);});
	$(document).on('click', 'div[id^="fa11"]', function() {showFloor(11);});
	$(document).on('click', 'div[id^="fa10"]', function() {showFloor(10);});
	$(document).on('click', 'div[id^="f9"]', function() {showFloor(9);});
	$(document).on('click', 'div[id^="f8"]', function() {showFloor(8);});
	$(document).on('click', 'div[id^="f7"]', function() {showFloor(7);});
	$(document).on('click', 'div[id^="f6"]', function() {showFloor(6);});
	$(document).on('click', 'div[id^="f5"]', function() {showFloor(5);});
	$(document).on('click', 'div[id^="f4"]', function() {showFloor(4);});
	$(document).on('click', 'div[id^="f3"]', function() {showFloor(3);});
	$(document).on('click', 'div[id^="f2"]', function() {showFloor(2);});
	$(document).on('click', 'div[id^="f1"]', function() {showFloor(1);});

	var showFloor = function(fooorNumber){		
		hideFloors();
		$(".floor" + fooorNumber).removeClass("hidden");
		if(fooorNumber >= 10)
			$("#fa" + fooorNumber).css("background-color", "#1c3237");
		else	
			$("#f" + fooorNumber).css("background-color", "#1c3237");
		setApartmentNumbers(fooorNumber);
	}

	var hideFloors = function(){
		$(".floor14").addClass("hidden");
		$(".floor13").addClass("hidden");
		$(".floor12").addClass("hidden");
		$(".floor11").addClass("hidden");
		$(".floor10").addClass("hidden");
		$(".floor9").addClass("hidden");
		$(".floor8").addClass("hidden");
		$(".floor7").addClass("hidden");
		$(".floor6").addClass("hidden");
		$(".floor5").addClass("hidden");
		$(".floor4").addClass("hidden");
		$(".floor3").addClass("hidden");
		$(".floor2").addClass("hidden");
		$(".floor1").addClass("hidden");		
		$("#fa14").css("background-color", "#c2c4a5")
		$("#fa13").css("background-color", "#c2c4a5")
		$("#fa12").css("background-color", "#c2c4a5")
		$("#fa11").css("background-color", "#c2c4a5")
		$("#fa10").css("background-color", "#c2c4a5")
		$("#f9").css("background-color", "#c2c4a5")
		$("#f8").css("background-color", "#c2c4a5")
		$("#f7").css("background-color", "#c2c4a5")
		$("#f6").css("background-color", "#c2c4a5")
		$("#f5").css("background-color", "#c2c4a5")
		$("#f4").css("background-color", "#c2c4a5")
		$("#f3").css("background-color", "#c2c4a5")
		$("#f2").css("background-color", "#c2c4a5")
		$("#f1").css("background-color", "#c2c4a5")
	}
});