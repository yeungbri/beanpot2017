function getSelectedText() {
	var text = "";
	if (typeof window.getSelection != "undefined") {
    		text = window.getSelection().toString();
	} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    		text = document.selection.createRange().text;
	}
	return text;
}

function grabText() {
	var selectedText = getSelectedText();
	if (selectedText) {
    		parseText(selectedText);
	}
}

function parseText(text) {
	text = text.replace(/(\S)pm/i, "$1 pm");
	text = text.replace(/(\S)pm/i, "$1 pm");
	text = text.replace(/rd/i, "").replace(/th/i, "");
	alert(moment(text).isValid());	
}

document.onmouseup = grabText;
document.onkeyup = grabText;
