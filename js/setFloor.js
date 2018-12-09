'use strict'
$(document).ready(function(){	
	$(document).on('click', 'div[id^="fa14"]', function() {
		hideFloors();
		$(".floor14").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="fa13"]', function() {
		hideFloors();
		$(".floor13").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="fa12"]', function() {
		hideFloors();
		$(".floor12").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="fa11"]', function() {
		hideFloors();
		$(".floor11").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="fa10"]', function() {
		hideFloors();
		$(".floor10").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f9"]', function() {
		hideFloors();
		$(".floor9").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f8"]', function() {
		hideFloors();
		$(".floor8").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f7"]', function() {
		hideFloors();
		$(".floor7").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f6"]', function() {
		hideFloors();
		$(".floor6").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f5"]', function() {
		hideFloors();
		$(".floor5").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f4"]', function() {
		hideFloors();
		$(".floor4").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f3"]', function() {
		hideFloors();
		$(".floor3").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f2"]', function() {
		hideFloors();
		$(".floor2").removeClass("hidden");
	});
	$(document).on('click', 'div[id^="f1"]', function() {
		hideFloors();
		$(".floor1").removeClass("hidden");
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
	}
});