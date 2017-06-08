
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea, .registration-form select, .registration-form ul, .registration-form div.krishna').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea, select, ul, div.krishna').each(function() {
    		if( $(this).val() == "" ) {
    			//$(this).addClass('input-error');
    			//next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
			
			
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    /*$('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea, select, ul, div.krishna').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });*/
    
    
});

$('.rendomrev').owlCarousel({
	loop: true,
	margin: 10,
	autoplay:true,
	autoplayHoverPause: true,
	autoplayTimeout:2000,
	//autoplayHoverPause:true,
		
	responsiveClass: true,                
	responsive: {
	0: {
		items: 1,
		nav: true
		},
	 600: {
		items: 1,
		nav: false
		},
	  1000: {
		items: 1,
		nav: true,
		loop: true,
		margin: 20
		}
	}
	
})

$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

// JavaScript Document