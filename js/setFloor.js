'use strict'
$(document).ready(function(){	
	$(document).on('click', 'div[id^="fa14"]', function() {
		hideFloors();
		$(".floor14").removeClass("hidden");
		$("#fa14").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="fa13"]', function() {
		hideFloors();
		$(".floor13").removeClass("hidden");
		$("#fa13").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="fa12"]', function() {
		hideFloors();
		$(".floor12").removeClass("hidden");
		$("#fa12").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="fa11"]', function() {
		hideFloors();
		$(".floor11").removeClass("hidden");
		$("#fa11").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="fa10"]', function() {
		hideFloors();
		$(".floor10").removeClass("hidden");
		$("#fa10").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f9"]', function() {
		hideFloors();
		$(".floor9").removeClass("hidden");
		$("#f9").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f8"]', function() {
		hideFloors();
		$(".floor8").removeClass("hidden");
		$("#f8").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f7"]', function() {
		hideFloors();
		$(".floor7").removeClass("hidden");
		$("#f7").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f6"]', function() {
		hideFloors();
		$(".floor6").removeClass("hidden");
		$("#f6").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f5"]', function() {
		hideFloors();
		$(".floor5").removeClass("hidden");
		$("#f5").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f4"]', function() {
		hideFloors();
		$(".floor4").removeClass("hidden");
		$("#f4").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f3"]', function() {
		hideFloors();
		$(".floor3").removeClass("hidden");
		$("#f3").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f2"]', function() {
		hideFloors();
		$(".floor2").removeClass("hidden");
		$("#f2").css("background-color", "#1c3237")	
	});
	$(document).on('click', 'div[id^="f1"]', function() {
		hideFloors();
		$(".floor1").removeClass("hidden");
		$("#f1").css("background-color", "#1c3237")	
	});

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