$(function(){
	var scrollPosition;
	var scrollValue = 0;
	$(window).on('scroll', function(){
		
		if(($(window).scrollTop())>scrollValue){
			$('nav').removeClass('mycolor');
			$('nav').addClass('scrolleffect');
			$('nav img').addClass('bgChange');

			scrollValue = ($(window).scrollTop());
		}
		else{
			$('nav').addClass('mycolor');
			$('nav').removeClass('scrolleffect');
			$('nav img').removeClass('bgChange');
			scrollValue = ($(window).scrollTop());
		}
	});

    var count = 0;
    var imageSrc;
	setInterval(function (){
            if ((count>1) || (count == 0)) {
            	count = 0;
                imageSrc = 'url(assets/images/car0.png)'
            }
            else{
            	imageSrc = 'url(assets/images/car' + count +'.jpg)';
            }
            
            $('.mybody').css({
            	'background':imageSrc,
            	'background-size': 'cover',
	            'z-index': '-1'
            });
			count = count + 1;
			
		}, 3000);
	




	/*let scrolling = false;

    window.scroll = () => {
    scrolling = true;
};

     setInterval(() => {
    if (scrolling) {
        scrolling = false;
        $('nav.mycolor').addClass('scrolleffect');
        
    }
},300);


	var elMap = document.getElementById('loc');
	var msg = 'Sorry, we were unable to get your location.';

	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(success, fail);
		elMap.textContent = 'Checking location...';

	} else{
		elMap.textContent = msg;
	}

	function success(position){
		msg = '<h3>Longitude:<br>';
		msg += position.coords.latitude + '</h3>';
		msg += '<h3> Latitude:<br>';
		msg += position.coords.longitude + '</h3>';
		elMap.innerHTML = msg;
	}

	function fail(msg){
		elMap.textContent = msg;
		console.log(msg.code);
	}
*/
});