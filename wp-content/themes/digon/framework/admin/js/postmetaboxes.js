jQuery(document).ready(function() {

	jQuery(".selectbox select").each(function(){
	  jQuery(this).wrap('<div class="selectbox"/>');
		jQuery(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
		var val = jQuery(this).children("option:selected").text();
		jQuery(this).next(".selecttext").text(val);
		jQuery(this).change(function(){
			var val = jQuery(this).children("option:selected").text();
			jQuery(this).next(".selecttext").text(val);
		});
	});

	var imageWrapper = jQuery('#image-meta-box');
	var linkWrapper = jQuery('#link-meta-box');
	var videoWrapper = jQuery('#video-meta-box');
	var quoteWrapper = jQuery('#quote-meta-box');
	var audioWrapper = jQuery('#audio-meta-box');
	var videoWrapper = jQuery('#video-meta-box');
	var galleryWrapper = jQuery('#gallery-meta-box');
	
	var imageSelector = jQuery('#post-format-image');
	var audioSelector = jQuery('#post-format-audio');
	var quoteSelector = jQuery('#post-format-quote');
	var linkSelector = jQuery('#post-format-link');
	var videoSelector = jQuery('#post-format-video');
	var gallerySelector = jQuery('#post-format-gallery');
	
	
	hideAll();
	showCheckedChoice();

	var postmetaChoice = jQuery('#post-formats-select input');
	
	postmetaChoice.change( function() {
	
		var thisElement = jQuery(this).val();

		switch ( thisElement ) {

			case 'quote' :
			quoteWrapper.css('display', 'block');
			DisplaySelected(quoteWrapper);
			break;
			
			case 'gallery' :
			galleryWrapper.css('display', 'block');
			DisplaySelected(galleryWrapper);
			break;

			case 'video' :
			videoWrapper.css('display', 'block');
			DisplaySelected(videoWrapper);
			break;

			case 'link' :
			linkWrapper.css('display', 'block');
			DisplaySelected(linkWrapper);
			break;	
			
			case 'image' :
			imageWrapper.css('display', 'block');
			DisplaySelected(imageWrapper);
			break;
			
			case 'audio' :
			audioWrapper.css('display', 'block');
			DisplaySelected(audioWrapper);
			break;
			
			default :
			quoteWrapper.css('display', 'none');
			galleryWrapper.css('display', 'none');
			videoWrapper.css('display', 'none');
			linkWrapper.css('display', 'none');
			audioWrapper.css('display', 'none');
			imageWrapper.css('display', 'none');

		}
		
	});
		
	function DisplaySelected(elementSelected) {
		hideAll();
		elementSelected.css('display', 'block');
	}
	
	function hideAll() {
		videoWrapper.css('display', 'none');
		galleryWrapper.css('display', 'none');
		quoteWrapper.css('display', 'none');
		linkWrapper.css('display', 'none');
		audioWrapper.css('display', 'none');
		imageWrapper.css('display', 'none');	
	}
	
	function showCheckedChoice() {
	
		if(quoteSelector.is(':checked')) {
			quoteWrapper.css('display', 'block');
		}
			
		if(linkSelector.is(':checked')) {
			linkWrapper.css('display', 'block');
		}
		
		if(audioSelector.is(':checked')) {
			audioWrapper.css('display', 'block');
		}
		
		if(gallerySelector.is(':checked')) {
			galleryWrapper.css('display', 'block');
		}
		
		if(videoSelector.is(':checked')) {
			videoWrapper.css('display', 'block');
		}
			
		if(imageSelector.is(':checked')) {
			imageWrapper.css('display', 'block');
		}
			
	}
});