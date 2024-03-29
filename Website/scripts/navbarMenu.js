/*
FILE NAME: navbarMenu.js 
WRITTEN BY: Tinus Flagstad 
WHEN: September 2016
PURPOSE: Den første funnksjonen "navBarMenu" bytter bare klassen til navbarID så jeg vet om den skal være responsiv eller ikke. Denne bytter jo annenhver gang. 
Den andre funksjonen "createNavBar" lager navbaren på hver side før footerwrappern som er på alle
sider. Og den siste funksjonen "createCover" lager en a element og img element for coverbildet.
Fikk inspirasjon til navbaren på http://www.w3schools.com/css/css_navbar.asp.
*/

createCover(); //først lager jeg coverbildet før footerwrapper.
createNavBar(); //så navbar under coverbildet men før footerwrapper den og.
createFooter(); // så lager jeg footer etter footerwrapper.


function navBarMenu() {
	const navbarID = document.getElementById("navbarID");
	if (navbarID.className === "navbarClass") {
		navbarID.className += " responsive";
	} else {
		navbarID.className = "navbarClass";
	}
}

function createNavBar() {
	const ul = document.createElement("ul"); //lager en UL navbarID'en.
	ul.id="navbarID";
	ul.className="navbarClass"; // den har også en class.
	document.body.insertBefore(ul, footerWrapper); // siden alle har en footerwrapper så legger jeg
	//den før den.
	//const navbarID = document.getElementById("navbarID");
	for (let x =0; x< 9; x++) { // 9 forskjellige knapper.
		const li = document.createElement("li"); 
		const a = document.createElement("a"); //alle li' har en a (link)
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
		else if (x==8) { //den siste er ikonet
			li.className="icon";
			aText = "☰";
			a.id="navbarMenuBtn";
			a.href="javascript:void(0);";
			a.onclick=function () {
				navBarMenu();
			}
		}
		a.appendChild(document.createTextNode(aText));
		if (x !=0 && x != 8) { // ikke første og ikke siste fordi første er index.html men skal stå HJEM og siste er knappen.
			aText = aText.replace(" ", "_");
			a.href = aText.toLowerCase();
		}
		if (x != 8) {
			if (x == 0 && whichSiteCurrently() == ""){ //finner ut hvilken side man er på for å legge iden til riktig sted.
			a.id="current";
			}
			if (whichSiteCurrently().toUpperCase() == aText) {
				a.id ="current";
			}
		}
		li.appendChild(a);
		navbarID.appendChild(li);
	}

}
whichSiteCurrently();
function whichSiteCurrently() {
	let path = window.location.pathname; //urlen din
	let page = path.split("/").pop(); //splitter på /
	page = page.split(".")[0]; //her er f.eks kontakt.html så jeg slitter på . og tar det første elementet f.eks kontakt.
	return page;
}

function createFooter() {
	const footer = document.createElement("footer"); //lager en footer
	const ul = document.createElement("ul");
	for (let x = 0; x<3; x++) { //lager 3 li elementer inni en ul
		const li = document.createElement("li");
		if (x==0) {
			li.innerHTML="Adresse";
		}
		else if (x==1) {
			li.innerHTML="Epost"; //fyller ut footern med bare example info fordi vi har ikke fått den ekte fra ntnui swing og folkedans-gruppen.
		}
		else if (x==2) {
			li.innerHTML="Webprosjekt 2016";
		}
		ul.appendChild(li);
	}
	footer.appendChild(ul);
	footerWrapper.parentNode.insertBefore(footer, footerWrapper.nextSibling); //legger den etter footerwrappern.
}

function createCover() {
	const a = document.createElement("a");
	const img = document.createElement("img");
	a.href =".";
	img.alt="Coverbildet for NTNUI Swing og Folkedans";
	img.id="cover";
	if (whichSiteCurrently() == "") {
		img.src="images/cover.jpg"; //fordi hjemsiden har større bildet enn de andre.
	}
	else {
		img.src="images/coverSmall.jpg" //alle andre sider har den lille coverbildet.
	}
	a.appendChild(img);
	document.body.insertBefore(a, footerWrapper); //setter den inn før footer-divven.
}