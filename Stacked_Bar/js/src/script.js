$(document).ready(function(){
	$('#home').mouseenter(function(){
		$('#home').addClass('zoom')
	});
	
	$('#home').mouseleave(function(){
		$('#home').removeClass('zoom')
	});
	
	$('#contact').mouseenter(function(){
		$('#contact').addClass('zoom')
	});
	
	$('#contact').mouseleave(function(){
		$('#contact').removeClass('zoom')
	});
	
	$('#skills').mouseenter(function(){
		$('#skills').addClass('zoom')
	});
	
	$('#skills').mouseleave(function(){
		$('#skills').removeClass('zoom')
	});
	
	$('#evl').mouseenter(function(){
		$('#evl').addClass('zoom')
	});
	
	$('#evl').mouseleave(function(){
		$('#evl').removeClass('zoom')
	});
	
	$('#visualization').mouseenter(function(){
		$('#visualization').addClass('zoom')
	});
	
	$('#visualization').mouseleave(function(){
		$('#visualization').removeClass('zoom')
	});
	
	$('#skillsHeader').accordion({collapsible: true, active: false});
	
});