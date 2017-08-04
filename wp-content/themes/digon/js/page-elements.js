jQuery(window).bind("load", function() {
	jQuery('.preload-image:hidden').fadeIn(800);
	jQuery('.portfolio-ajax').css('opacity','1');
	jQuery('.portfolio-columns').css('opacity','1');
	jQuery('ul.portfolio-four li,ul.portfolio-three li,ul.portfolio-two li,ul.portfolio-one li').css('background','none');
});
jQuery(function($){
	//Detect Orientaiton change
	window.onload = orientationchange;
	window.onorientationchange = orientationchange;
	function orientationchange() {
		jQuery('ul.portfolio-list').css('height','auto');
	}
	
	
	function QuickSandInit() {
		// Clone portfolio items to get a second collection for Quicksand plugin
		var $portfolioClone = jQuery(".portfolio-list").clone();

		// Attempt to call Quicksand on every click event handler
		jQuery(".portfolio-filter a").click(function(e){
		
			// Change filtered text upon click. This is displayed on top of the filterable choices.
			var SelectedFilterText = jQuery(this).text();
			jQuery('#filter-selected').text(SelectedFilterText);
		
			// Set index to zero and disable prev
			jQuery('.ajax-gallery-navigation').attr('id', '-1');
			jQuery('.ajax-prev').css('opacity','0.8');
			jQuery('.ajax-prev').css('cursor','default');
		
			jQuery(".portfolio-filter li").removeClass("current");	
		
			// Get the class attribute value of the clicked link
			var $filterClass = jQuery(this).parent().attr("class");

		
			if ( $filterClass == "all" ) {
				var $filteredPortfolio = $portfolioClone.find("li");
			} else {
				var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
			}
		
			// Call quicksand
			jQuery(".portfolio-list").quicksand( $filteredPortfolio, { 
				duration: 800,
				adjustHeight: 'dynamic',
          	    easing: 'easeInOutQuad',
				enhancement: function() {
					//get stored value to highlight
					var portfolioID = jQuery('.ajax-gallery-navigation').attr("rel");
					jQuery( '[data-portfolio=portfolio-'+portfolioID+']').addClass('portfolio-displayed');
					jQuery('.portfolio-ajax').css('opacity','1');
					jQuery('a.portfolio-columns').css('opacity','1');
					jQuery('.preload-image:hidden').show();
					PrettyPhotoLightbox();
				}
			}, function(){
				HoverEffect();
				
			});
	

			jQuery(this).parent().addClass("current");

			// Prevent the browser jump to the link anchor
			e.preventDefault();
		});
	}
	
	function PrettyPhotoLightbox() {
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			opacity: 0.9,
			theme: 'dark_square',
			deeplinking: false,
			default_width: 700,
			default_height: 444,
			overlay_gallery: false,
			show_title: false,
			social_tools: false
		});
	}
	
	function HoverEffect() {
		jQuery("a.portfolio-image-link").hover(
		function () {
			jQuery(this).find("span.column-portfolio-icon").stop().animate({"top": "20px", "opacity" : "1"}, 500);
		},
		function () {
			jQuery(this).find("span.column-portfolio-icon").stop().animate({"top": "-30px", "opacity" : "0"}, 300);
		});
	}
	
	QuickSandInit();
	HoverEffect();
	PrettyPhotoLightbox();
	
});

jQuery(window).bind("load", function() {
	jQuery('.portfolio-ajax').eq(0).trigger('click');
});