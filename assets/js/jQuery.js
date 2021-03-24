$(document).ready(function(){
 $('.beauty button:first').click(function(){
 	$('p').toggle(5000);
 });

  $('#butt').click(function(){
 	$('div.temp').animate({
 		height: '+=100px',
 		top: '100px'
 	},3000);
 });
 
 $(':header').addClass('headline');
 $('li:lt(3)').hide().fadeIn(5000);
 $('li').on('click',function(){
 	$(this).animate({
 		opacity:0.0,
 		paddingLeft:'+=80',
 },500,function(){
 	$(this).remove();
 });

 });

});601883ae65a61e003336f549
60223e8185241400171a61a9