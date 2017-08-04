jQuery(document).ready(function(){

	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	
	jQuery('.homemenu ul.menu').superfish({
		animation:   {opacity:'show'},
		speed:         'normal',
		delay: 		1000,
		autoArrows:  true,
		dropShadows: true
		});
		
		
	jQuery.fn.equalCols = function(){
		//Array Sorter
		var sortNumber = function(a,b){return b - a;};
		var heights = [];
		//Push each height into an array
		jQuery(this).each(function(){
			heights.push(jQuery(this).height());
		});
		
		heights.sort(sortNumber);
		var maxHeight = heights[0];
		return this.each(function(){
			//Set each column to the max height
			jQuery(this).css({'height': maxHeight});
		});
	};
	// Set equal height for grid columns
	jQuery('.gridservice_col1,.gridservice_col2,.gridservice_col3').equalCols();
	// Check on window resize and set equal height for responsive change
	jQuery(window).resize(function(){
		jQuery('.gridservice_col1,.gridservice_col2,.gridservice_col3').css('height','auto');
		jQuery('.gridservice_col1,.gridservice_col2,.gridservice_col3').equalCols();
	
	});

		
	//Sidebar toggle function
	jQuery(".menu-toggle-off").live('click',function () {
	
	
	
		jQuery(".top-menu-wrap").stop().animate({top:'-100','opacity':'0'},500, function() {
			jQuery(".grid-list-position").fadeOut();
			jQuery(".super-navigation, .control-underlay,.slidshowbackground-panel,#fullscr-copyright,#play-button,.fullscreenslideshow-audio").fadeOut();
		});
		
		jQuery('.menu-toggle').css({"bottom":"12px","right":"28px","height":"30","width":"30"});
		
	
		jQuery("#slidecaption").css({"visibility":"hidden"});
		jQuery('.container').stop().animate({left:'-500','opacity':'0'},500, function() {
			jQuery(".container").css({"display":"none"});
		});
		jQuery(".homemenu").stop().animate({'opacity':'0'},150, function() {
			jQuery(".mainmenu-navigation").css({"display":"none"});
		});
		jQuery('.menu-toggle').removeClass('menu-toggle-off');
		jQuery('.menu-toggle').addClass('menu-toggle-on');
		jQuery('.mcycletextwrap').css({"visibility":"hidden"});
		
		jQuery('.logo').css({"display":"block"});
	  });
	
	//Sidebar toggle function
	jQuery(".menu-toggle-on").live('click',function () {
	
			jQuery(".top-menu-wrap").stop().animate({top:'0','opacity':'1'},500, function() {
				jQuery(".grid-list-position").fadeIn();
				jQuery('.gridservice_col1,.gridservice_col2,.gridservice_col3').css('height','auto');
				jQuery('.gridservice_col1,.gridservice_col2,.gridservice_col3').equalCols();
				
				jQuery(".super-navigation, .control-underlay,.slidshowbackground-panel,#fullscr-copyright,#play-button,.fullscreenslideshow-audio").fadeIn();
			});
			
			jQuery('.menu-toggle').css({"bottom":"7px","right":"23px","height":"40","width":"40"});
		
			jQuery(".homemenu").stop().animate({'opacity':'1'},500);
			jQuery(".mainmenu-navigation").css({"display":"block"});
			jQuery('.menu-toggle').removeClass('menu-toggle-on');
			jQuery('.menu-toggle').addClass('menu-toggle-off');
			jQuery(".container").css({"display":"block"});
			jQuery("#slidecaption").css({"visibility":"visible"});
			jQuery('.container').stop().animate({left:'0','opacity':'1'},500);
			jQuery('.mcycletextwrap').css({"visibility":"visible"});
	});
	
	
	
	
	//Portfolio Hover effects
	jQuery("span.ajax-portfolio-icon").fadeTo("fast", 0);
	
	//Portfolio Hover effects
	jQuery(".gototop,.hrule.top a").click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	
	jQuery("span.portfolio-gallery-icon").fadeTo("fast", 0);
	jQuery("a.portfolio-image-link").hover(
	function () {
		jQuery(this).find("span.portfolio-gallery-icon").stop().animate({"top": "40%", "opacity" : "0.6"}, 300);
	},
	function () {
		jQuery(this).find("span.portfolio-gallery-icon").stop().animate({"top": "70%", "opacity" : "0"}, 300);
	});
	
	// Fit videos to page
	jQuery(".fitVids").fitVids();
	
	// Home Service hover block effects
	jQuery(".service-block").hover(
	function () {
		var homeimage_height = jQuery(this).find(".gridservice_image img").height();
		jQuery(this).find(".gridservice_image").stop().animate({"top": "-" + homeimage_height + "px", "opacity" : "1"}, 300);
	},
	function () {
		jQuery(this).find(".gridservice_image").stop().animate({"top": "0", "opacity" : "0"}, 300);
	});
	
	// Responsive dropdown list triggered on Mobile platforms
    jQuery('#top-select-menu').bind('change', function () { // bind change event to select
        var url = jQuery(this).val(); // get selected value
        if (url != '') { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
	
	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	jQuery("h4.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
		return false;
	});
	jQuery('h4.trigger').trigger('click');	
	
	jQuery(".postformat-image-lightbox img").fadeTo("fast", 0.8);
	jQuery(".postformat-image-lightbox img").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.9);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.8);
	});
	
	jQuery("#main-portfolio-carousel .preload").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".portfolio-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".thumbnail-image").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".pictureframe").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".filter-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	
	jQuery('.qtips').tipsy({gravity: 'n'});
	jQuery('.etips').tipsy({gravity: 'e'});
	jQuery('.stips').tipsy({gravity: 's'});
    
});

jQuery(function () {
	jQuery('.portfolio-thumbnail-block').hide();
	jQuery('.filter-thumbnail-block').hide();
});

var i = 0;//initialize
var int=0;//Internet Explorer Fix
jQuery(window).bind("load", function() {
	var int = setInterval("doThis(i)",10);

	jQuery('.filter-thumbnail-loader').hide();
	jQuery('.filter-thumbnail-block:hidden').fadeIn(800);
	

});

function doThis() {
	var images = jQuery('.portfolio-image-holder').length;
	if (i >= images) {
		clearInterval(int);
	}
	jQuery('.thumbnail-loader').eq(i).fadeOut(0);
	jQuery('.portfolio-thumbnail-block:hidden').eq(0).fadeIn(800);
	i++;
}