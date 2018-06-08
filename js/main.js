"use strict";

var image_actuelle = 0;

var handle;

var li = $('li');

$(function() {

	li.hide();

	li.eq(image_actuelle).show();


	$('#toolbar-toggle').on("click", function() {

		$('.button-slide').toggleClass('hide');

		keyPressImage();

	})
		

	$('#slider-next').on("click", function() {

		displayNext();

	})

	$('#slider-previous').on("click", function() {

		displayPrevious();

	})
	

	$('#slider-toggle').on("click", function() {
		if (handle) { 
			$('.play').toggleClass('hide');
			$('.pause').toggleClass('hide');
			//displayAutomatic();
			pauseSlideshow();
		} else { 
			$('.play').toggleClass('hide');
			$('.pause').toggleClass('hide');
			playSlideshow();
		} 

	});


	$('#slider-random').on("click", function() {
		displayRandomImage();
	})







});/*END*/
