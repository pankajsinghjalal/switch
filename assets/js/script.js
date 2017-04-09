/* Author: 

*/

/*nav functionality*/
$(document).ready(function(){

	var tabOne = $(".tab-one");
	var tabTwo = $(".tab-two");
	var tabThree = $(".tab-three");
	var setOne = $(".set-one");
	var setTwo = $(".set-two");
	var setThree = $(".set-three");



	/* clicking on bars class*/
	$(".bars").click(function(e){
		console.log("hit e", e);		/*navigation will show and hide*/
		$("nav").toggle('slow');
	});


/*tab functionality*/

	tabOne.click(function(){
		setOne.show();
		setTwo.hide();
		setThree.hide();

	});

	tabTwo.click(function(){
		setTwo.show();
		setOne.hide();
		setThree.hide();
	});

	tabThree.click(function(){
		setThree.show();
		setOne.hide();
		setTwo.hide();
	});


/*light box*/
var setOne = $(".set-one");
var largeImage = $(".large-image");
var imageOne = $("#image-one");
var imageTwo = $("#image-two");
var imageThree = $("#image-three");
var imageFour = $("#image-four");
var imageFive = $("#image-five");




imageOne.click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-1.jpg')	;
});
imageTwo.click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-2.jpg')	;
});
imageThree.click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-3.jpg')	;
});
imageFour.click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-4.jpg')	;
});
imageFive.click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-5.jpg')	;
});
$("#image-six").click(function(){
	largeImage.css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-6.jpg')	;
});
$("#image-seven").click(function(){
	$(".large-image").css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-7.jpg')	;
});
$("#image-eight").click(function(){
	$(".large-image").css({'display':'block'});
	$('.large-image img').attr('src','assets/images/photography-8.jpg')	;
});

$(".cancel").click(function(){		
	$(".large-image").css({'display':'none'});
});

$(".large-image").click(function(event){
	event.stopPropagation();
	$(this).hide();
});

$(".l-image").click(function(event){
	event.stopPropagation();
});

});



















