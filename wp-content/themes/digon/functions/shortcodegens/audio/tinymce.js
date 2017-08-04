function insertTypeShortcode() {
	
	var shortcodeText;
	var mp3_file = document.getElementById('mp3_file').value;
	var oga_file = document.getElementById('oga_file').value;
	var m4a_file = document.getElementById('m4a_file').value;
	
	//shortcodeText = '<br />[flexislideshow]<br />';
	shortcodeText = '<br />[audioplayer mp3="' + mp3_file + '" oga="' + oga_file  + '" m4a="' +  m4a_file + '"]<br />';

	
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
