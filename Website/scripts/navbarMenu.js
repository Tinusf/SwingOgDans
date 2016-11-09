/*
FILE NAME: navbarMenu.js 
WRITTEN BY: Tinus Flagstad 
WHEN: September 2016
PURPOSE: Den første funnksjonen "navBarMenu" bytter bare klassen til navbarID så jeg vet om den skal være responsiv eller ikke. Denne bytter jo annenhver gang. 
Den andre funksjonen "createNavBar" lager navbaren på hver side før footerwrappern som er på alle
sider.
*/

createNavBar();

function navBarMenu() {
	const navbarID = document.getElementById("navbarID");
	if (navbarID.className === "navbarClass") {
		navbarID.className += " responsive";
	} else {
		navbarID.className = "navbarClass";
	}
}

function createNavBar() {
	const ul = document.createElement("ul");
	ul.id="navbarID";
	ul.className="navbarClass";
	document.body.insertBefore(ul, footerWrapper);
	//const navbarID = document.getElementById("navbarID");
	for (let x =0; x< 9; x++) {
		const li = document.createElement("li");
		const a = document.createElement("a");

		let aText;

		if (x== 0) {
			aText = "HJEM";
			a.href =".";
		}
		else if (x == 1) {
			aText = "TRENINGER";
		}
		else if (x==2) {
			aText = "EKSTERNE KURS";
		}
		else if (x==3) {
			aText = "MUSIKK";
		}
		else if (x==4) {
			aText = "OM OSS";
		}
		else if (x==5) {
			aText = "KONTAKT";
		}
		else if (x==6) {
			aText = "FAQ";
		}
		else if (x==7) {
			aText = "ENGLISH";
		}
		else if (x==8) {
			li.className="icon";
			aText = "☰";
			a.id="navbarMenuBtn";
			a.href="javascript:void(0);";
			a.onclick=function () {
				navBarMenu();
			}
		}
		a.appendChild(document.createTextNode(aText));
		if (x !=0 && x != 8) {
			aText = aText.replace(" ", "_");
			a.href = aText.toLowerCase();
		}
		
		
		
		if (x != 8) {
			if (x == 0 && whichSiteCurrently() == ""){
			a.id="current";
			}
			if (whichSiteCurrently().toUpperCase() == aText) {
				a.id ="current";
			}
		}
		
		li.appendChild(a);
		navbarID.appendChild(li);




		console.log(whichSiteCurrently().toUpperCase());
	}

}
whichSiteCurrently();
function whichSiteCurrently() {
	let path = window.location.pathname;
	let page = path.split("/").pop();
	page = page.split(".")[0];
	return page;
}