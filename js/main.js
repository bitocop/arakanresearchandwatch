
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
	$('.banner-area').backstretch([
	                     "images/backgrounds/1.1.jpg"
	                   , "images/backgrounds/2.2.jpg"
	                   , "images/backgrounds/3.3.jpg"
	                  ], {duration: 3000, fade: 750});
					  
});

	// cowntdown function. Set the date below (December 1, 2016 00:00:00):
	var austDay = new Date("January 10, 2021 01:00:00");
		$('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> {dl}</div> <div class="item"><p>{hn}</p> {hl}</div> <div class="item"><p>{mn}</p> {ml}</div> <div class="item"><p>{sn}</p> {sl}</div>'});
		$('#year').text(austDay.getFullYear());
		
	// smooth scrolling	
		$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	