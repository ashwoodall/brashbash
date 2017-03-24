$(document).ready(function(){


// sticky navbar
	  $(window).scroll(function () {  
	      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 736) {
	      $('header').addClass('show-header');
	      $('#rsvp').css('marginTop','64px');
	    }
	    if ($(window).scrollTop() < 737) {
	      $('header').removeClass('show-header');
	      $('#rsvp').css('marginTop','0');
	    }
  	});

// smooth scroll
		$(document).ready(function () {
		     $('a[href^="#"]').on('click', function (e) {
		         e.preventDefault();

		         var target = this.hash,
		             $target = $(target);

		         $('html, body').stop().animate({
		             'scrollTop': $target.offset().top - 63
		         }, 900, 'swing', function () {
		             window.location.hash = target;
		         });
		     });
		 });

// countdown
  CountDownTimer('06/10/2017 06:00 PM', 'countdown');

	function CountDownTimer(dt, id)
	{
	    var end = new Date(dt);
	    var _second = 1000;
	    var _minute = _second * 60;
	    var _hour = _minute * 60;
	    var _day = _hour * 24;
	    var timer;

	    function showRemaining() {
	        var now = new Date();
	        var distance = end - now;
	        if (distance < 0) {

	            clearInterval(timer);
	            document.getElementById(id).innerHTML = 'Ashley and Brandon tied the knot!!';

	            return;
	        }
	        var days = Math.floor(distance / _day);
	        var hours = Math.floor((distance % _day) / _hour);
	        var minutes = Math.floor((distance % _hour) / _minute);
	        var seconds = Math.floor((distance % _minute) / _second);

	        document.getElementById(id).innerHTML = days + ' Days ';
	        document.getElementById(id).innerHTML += hours + ' Hrs ';
	        document.getElementById(id).innerHTML += minutes + ' Mins ';
	        document.getElementById(id).innerHTML += seconds + ' Secs ';
	    }

	    timer = setInterval(showRemaining, 1000);
	}


// parallax background images
		(function(){
	  	var parallax = $(".parallax"), speed = 0.05;
	  	window.onscroll = function(){
	    	[].slice.call(parallax).forEach(function(element,i){
	      	var windowYOffset = window.pageYOffset;
	      	elementYOffset = element.offsetTop; 
	      	elementBackgrounPos = "50% " + (-(windowYOffset - elementYOffset) * speed) + "px";
	      	element.style.backgroundPosition = elementBackgrounPos;
	    	});
	  	};
		})();

});


