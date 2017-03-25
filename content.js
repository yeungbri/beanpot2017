var html = document.createElement('div');
html.innerText = "Hello!";
html.style.position = "absolute";
html.style.height = "200px";
html.style.zindex = "2";
html.style.width = "200px";
html.style.display = "none";
html.style.border = "solid thin";
html.style.background = "white";
html.id = "popup";
document.body.appendChild(html);

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
		s = window.getSelection();
		range = s.getRangeAt(0);
		rect = range.getBoundingClientRect();
		console.log(rect.top, rect.bottom, rect.left, rect.right);
		popup = document.getElementById("popup");
		var newTop = rect.bottom + scrollY;
		popup.style.top = newTop.toString() + "px";
		var newLeft = rect.left + scrollX;
		popup.style.left = newLeft.toString() + "px";
		popup.style.display = '';
	}
}

document.onmousedown = function() { document.getElementById("popup").style.display = "none" };

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


