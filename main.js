$(document).ready(function() {
	console.log( "ready!" );
});

$('.more').click(function() {
  $(this).next('.hide').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();

});

$('#submit').click( function() { 
	alert('Thank you so much for contacting us!'); 
	});


@media all and (min-width: 36em){
	.main { float: left; width:60%; }
	.sidebar { float: left; width:40%; }



@media all and (min-width: 50em){
	.main { width:70%; }
	.sidebar { width:30%; }