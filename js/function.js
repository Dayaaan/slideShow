"use strict";


function displayNext() {


	var ancienne_image = image_actuelle;

	image_actuelle++;

	if(image_actuelle == li.length){

		image_actuelle = 0;

	}

	li.eq(ancienne_image).fadeOut(1500, function () {

		li.eq(image_actuelle).fadeIn(1000);	

	});

};

function displayPrevious() {


	var ancienne_image = image_actuelle;

	image_actuelle--;

	if(image_actuelle == li.length){

		image_actuelle = 0;

	}

	li.eq(ancienne_image).fadeOut(1500, function () {

		li.eq(image_actuelle).fadeIn(1000);	
	});

};

function displayRandomImage() {


	var ancienne_image = image_actuelle;

	image_actuelle = Math.floor(Math.random() * 6 );

	//Pour ne pas retomber sur le meme chiffre deux fois de suite :

	if (image_actuelle == ancienne_image) {
		image_actuelle = Math.floor(Math.random() * 6 );
	}

	console.log(image_actuelle);

	li.eq(ancienne_image).fadeOut(1500, function () {

		li.eq(image_actuelle).fadeIn(1000);	

	});
}

function pauseSlideshow(){

	clearInterval(handle);

	handle = false;
}

function playSlideshow(){

	handle = setInterval(function() { 

		displayNext();

	},  3000);

}


function keyPressImage() {

	$(document).keydown(function(e){
		console.log(e.which);

		switch (e.keyCode) {

			case 37: 

				displayPrevious();

				break;

			case 39: 

				displayNext();

				break;

		}
	});
}







