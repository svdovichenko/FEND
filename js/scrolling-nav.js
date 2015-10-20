//jQuery to collapse the navbar on scroll
$( document ).ready(function() {
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".navbar-default .navbar-nav > li > a").css({'color': "#212121"});
			$(".navbar-default").css({'background-color': "#eee"});
			$(".navbar-brand .logo-s").css({'color': "#212121"});
			$(".navbar-brand .logo-v").css({'color': "#fff"});
			$(".navbar-collapse.collapse.in").css({'color': "red", 'background-color': "#eee"});
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".navbar-default .navbar-nav > li > a").css({'color': "#fff"});
			$(".navbar-brand .logo-s").css({'color': "#fff"});
			$(".navbar-brand .logo-v").css({'color': "#212121"});
			$( ".navbar-default").css( {'background-color': "transparent"} );
			$(".navbar-collapse.collapse.in").css({'color': "red", 'background-color': "transparent"});
			$( ".navbar-default .navbar-nav > li > a" ).hover( function () {
				$( this ).addClass( "hover_test" );
  				}, function() {
    				$( this ).removeClass( "hover_test" );
  				}
			);
		}
	});
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
    	var $anchor = $(this);
        $('html, body').stop().animate({
        	scrollTop: $($anchor.attr('href')).offset().top
    	}, 1500, 'easeInOutExpo');
    	event.preventDefault();
    });
});
