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
	//alert(moment(text).isValid());	
}
//var client_id =
// Client ID and API key from the Developer Console
var CLIENT_ID = '808596315080-vpevnlu9tuncg10r8dono1tplots0222.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

document.onmouseup = grabText;
document.onkeyup = grabText;
