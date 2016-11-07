/*
FILE NAME: navbarMenu.js 
WRITTEN BY: Tinus Flagstad 
WHEN: September 2016
PURPOSE: Denne funksjonen bytter bare klassen til navbarID så jeg vet om den skal være responsiv eller ikke. Denne bytter jo annenhver gang. 
*/
function navBarMenu() {
	
	var navbarID = document.getElementById("navbarID");
	if (navbarID.className === "navbarClass") {
		navbarID.className += " responsive";
	} else {
		navbarID.className = "navbarClass";
	}
}