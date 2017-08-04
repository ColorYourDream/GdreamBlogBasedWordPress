function insertTypeShortcode() {
	
	var shortcodeText;
	var lightbox = document.getElementById('sc_lightbox').value;
	var lightboxtitles = document.getElementById('sc_lightboxtitles').value;
	var slideshowtitles = document.getElementById('sc_titles').value;
	var slideshow_page = document.getElementById('slideshow_page').value;
	
	//shortcodeText = '<br />[flexislideshow]<br />';
	shortcodeText = '<br />[flexislideshow pageid="' + slideshow_page + '" lightbox=' + lightbox + ' lboxtitle=' + lightboxtitles  + ' slideshowtitle=' +  slideshowtitles + ']<br />';

	
	if(window.tinyMCE) {
		//TODO: For QTranslate we should use here 'qtrans_textarea_content' instead 'content'
		window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, shortcodeText);
		//Peforms a clean up of the current editor HTML. 
		//tinyMCEPopup.editor.execCommand('mceCleanup');
		//Repaints the editor. Sometimes the browser has graphic glitches. 
		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.close();
	}
	return;
}
