/*
FILE NAME: showHideText.js
WRITTEN BY: Sigve S. Nordgaard
WHEN: Oktober 2016
PURPOSE: Shows and hides text when the text is clicked, and changes the symbol between '+' and '-' 
*/
function textClick(text,symbol) {
	var text = document.getElementById(text);
	var symbol = document.getElementById(symbol);
	/* If display is set to none(text hidden) show the text, else the text is shown(as block) and we want to hide it.
	Because javascrips only sets and gets style from the html and style is originally set in css, we have to check if 
	its the first time we change the style with javascript by checking for empty string in style.display. */
	if(text.style.display == 'none' || text.style.display == ''){
		text.style.display = 'block';
		symbol.innerHTML = '−';
	}
	else{
		text.style.display = 'none';
		symbol.innerHTML = '+';
	}
}