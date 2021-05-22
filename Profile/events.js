//the images will appear when clicked on radio buttons
let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
	img.src = 'f1.jpeg';
})

btn2.addEventListener('click', () => {
	img.src = 'f2.jpeg';
})

btn3.addEventListener('click', () => {
	img.src = 'f3.jpeg';
})

btn4.addEventListener('click', () => {
	img.src = 'f4.jpeg';
})

btn5.addEventListener('click', () => {
	img.src = 'f5.jpeg';
})


//image slider 
 $(document).ready(function(){
 	$('.next').on('click', function(){
 		var currentImg = $('.active');
		var nextImg = currentImg.next();

 		if(nextImg.length){
 			currentImg.removeClass('active').css('z-index', -10);
 			nextImg.addClass('active').css('z-index', 10);
 		}
 	});

 	$('.prev').on('click', function(){
 		var currentImg = $('.active');
		var prevImg = currentImg.prev();

 		if(prevImg.length){
 			currentImg.removeClass('active').css('z-index', -10);
 			prevImg.addClass('active').css('z-index', 10);
 		}
 	});
 });


$(document).ready(function() {

			$("h1").fadeOut().slideDown(1000);
});


