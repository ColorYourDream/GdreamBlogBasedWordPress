jQuery(document).ready( function($) {
	//jQuery(".ranger-bar :text").rangeinput();

	$("#optionsframework select").each(function(){
	  $(this).wrap('<div class="selectbox"/>');
		$(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
		var val = $(this).children("option:selected").text();
		$(this).next(".selecttext").text(val);
		$(this).change(function(){
			var val = $(this).children("option:selected").text();
			$(this).next(".selecttext").text(val);
		});
	});

    $ ('div.section:even').addClass ('even');
    $ ('div.section:odd').addClass ('odd');
	
	//jQuery( ".ranger-bar :text" ).slider();
	$('.ranger-bar :text').each(function(index) {
	                // get input ID
					var inputField = $(this);
	                var inputId = $(this).attr('id');
	                // get input value
	                var inputValue = parseInt($(this).val());
	                // get input max
	                var inputMin = parseInt($(this).attr('min'));
					var inputMax = parseInt($(this).attr('max'));
	
					console.log(inputId,"MIN:"+inputMin,inputMax,inputValue);

	                $('#'+inputId+'_slider').slider({
						range: "min",
	                    value: inputValue,
	                    max: inputMax,
	                    min: inputMin,
	                    slide: function(event, ui){

	                        $(inputField).val(ui.value);

	                    }
	                });
	            });
	
				$( ".ranger-bar :text" ).change(function() {
					var inputField = $(this);
					var inputId = $(this).attr('id');
					var inputMin = parseInt($(this).attr('min'));
					var inputMax = parseInt($(this).attr('max'));
					var inputValue = parseInt($(this).val());
					
					if (inputValue > inputMax ) { 
						inputValue=inputMax;
						$(inputField).val(inputValue);
					}
					if (inputValue < inputMin ) { 
						inputValue=inputMin;
						$(inputField).val(inputValue);
					}
				    $('#'+inputId+'_slider').slider( "value", inputValue );
				});
	
	jQuery( "#home-list" ).sortable();
	jQuery( "#home-list" ).disableSelection();
	
	var homeList = jQuery('#home-list');
	jQuery('#loading-animation').hide();
 
	homeList.sortable({
		update: function(event, ui) {
			jQuery('#loading-animation').show(); // Show the animate loading gif while waiting
 			//alert(homeList.sortable('toArray').toString());
			opts = {
				url: ajaxurl, // ajaxurl is defined by WordPress and points to /wp-admin/admin-ajax.php
				type: 'POST',
				async: true,
				cache: false,
				dataType: 'json',
				data:{
					action: 'home_sort', // Tell WordPress how to handle this ajax request
					order: homeList.sortable('toArray').toString() // Passes ID's of list items in	1,3,2 format
				},
				success: function(response) {
					jQuery('#loading-animation').hide(); // Hide the loading animation
					return; 
				},
				error: function(xhr,textStatus,e) {  // This can be expanded to provide more information
					//alert('There was an error saving the updates');
					jQuery('#loading-animation').hide(); // Hide the loading animation
					return; 
				}
			};
			jQuery.ajax(opts);
		}
	});	
});