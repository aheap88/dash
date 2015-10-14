$(document).ready(function(){
	$("a.mobile").click(function(){
		$(".sidebar").slideToggle('fast');
	});

	window.onresize = function(event){
		if($(window).width() > 320) {
			$(".sidebar").show();
		}
	};
	$("a.mobile").click(function(){
		$(".menu").slideToggle('fast');
	});


	window.onresize = function(event){
		if($(window).width() > 320) {
			$(".menu").show();
		}
	};

	window.onresize = function(event){
		if($(window).width() < 320) {
			$(".menu").hide();
		}
	};
});