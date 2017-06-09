$(document).ready(function(){
  $('.your-class').slick({
  	// autoplay : true,
  	// autoplaySpeed : 600,
  	// adaptiveHeight : true,
  	// arrows : true,
  	dots: true,
  	infinite : false,
  	// speed : 300,
    slidesToShow: 5,
	slidesToScroll: 3,
	// centerMode : true,
	variableWidth : true

  });
});

// On swipe event
$('.your-class').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// On edge hit
$('.your-class').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});

// On before slide change
$('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});