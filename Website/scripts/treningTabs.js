/*englishTreningTabs.js
WRITTEN BY: Tinus/ Morten
WHEN: September 2016
PURPOSE: Endre teksten i table elementet i treninger.html og treningsteksten (p). 
Kommentarer til denne koden på er englishTreningTabs.js fordi de er like bortsett fra at denne er på
norsk, mens den andre er på engelsk. 
Den markerer også hvilken dag du har trykket på sist. 
Dette gjør jeg vet å endre en klasse for hver gang du trykker på den.
*/
const treningList1 = document.getElementById("treningList1");
const treningList2 = document.getElementById("treningList2");
const treningList3 = document.getElementById("treningList3");
const treningList4 = document.getElementById("treningList4");

const treningsTid = document.getElementById("treningsTid");
const treningsKurs = document.getElementById("treningsKurs");
const treningsSted = document.getElementById("treningsSted");

const treningsTekst = document.getElementById("treningsTekst");

treningList1.addEventListener("click", function() { 
	treningsTid.innerHTML="20:15 – 22:00";
	treningsKurs.innerHTML = "Swing (Videregående)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Armfeldtsalen";
	treningsTekst.innerHTML = "Dette kurset er beregnet for de som har danset swing i minst ett år (to semester) hos oss. Kurset har fokus på avanserte turer og teknikk, med litt annet krydder, som f.eks. gutt med to jenter og hopp/løft. Om du er usikker på hvilket nivå du bør være på, eller lurer på noe annet: ikke nøl med å ta kontakt med en av instruktørene🙂 Vi anbefaler å ha vært gjennom minst to semester med nybegynnerkurs før man blir med på videregåendepartiet, dette er viktig for å opprettholde nivået på dette kurset for alle deltagere, siden vi dessverre kun har kurs på to nivå.";
	clearClasses();
	treningList1.className ="current";
});

treningList2.addEventListener("click", function() { 
	treningsTid.innerHTML="18:30 – 20:00";
	treningsKurs.innerHTML = "Swing (Nybegynner)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Aerobicsalen og Kjellersalen";
	treningsTekst.innerHTML ="Nybegynnerkurset i swing passer for de som aldri har danset før og de som har danset mindre enn 1-2 år, men er også veldig lærerikt for alle andre. Vi starter med 1.5 timers instruksjon, og så er det fridans resten av kvelden. Det instrueres i 4-trinns-swing (den mest vanlige swing-typen i Norge). Vi holder helt basic introkurs de tre første gangene i hvert semester, etter disse er høst- og vårsemesterne forskjellige, slik at man lærer nye ting gjennom et helt år. Det vil si at hvis man kan prøve seg på videregående-partiet hvis føler man har kontroll etter to semester.";
	clearClasses();
	treningList2.className ="current";
});

treningList3.addEventListener("click", function() { 
	treningsTid.innerHTML="20.00 – 22.00";
	treningsKurs.innerHTML = "Folkedans (Alle)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen Kjellersalen";
	treningsTekst.innerHTML = "Har du lyst til å lære deg norsk folkedans? Eller har du danset før, men savner noen å danse med? Alle er velkommne, uansett nivå 🙂 <br>Vi har hovedfokus på reinlender, vals, pols og halling, men i løpet av semesteret kan vi i tillegg komme innom springar, polka, tango og mye annet artig! <br>Vi legger vekt på å lære bort det å føre og å følge, som er essensielt i all pardans. Folkedanstreningene kan derfor også være et nyttig supplement for de som driver med andre danser. Vi reiser også gjerne sammen på dansekvelder i Trondheimsområdet og arrangerer felles turer til Rørosmartnan og Hilmarfestivalen..Kalender";
	clearClasses();
	treningList3.className ="current";
});

treningList4.addEventListener("click", function() { 
	treningsTid.innerHTML="20.30 – 22.00";
	treningsKurs.innerHTML = "Fridans Swing (Alle)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Aerobicsalen";
	treningsTekst.innerHTML = "Fridans (man danser fritt med hvem man vil) for alle som vil være med. Kom og dans, og øv på det du lærte på forrige nybegynner- eller videregåendetrening!";
	clearClasses();
	treningList4.className ="current";
});

function clearClasses() {
	treningList1.className ="";
	treningList2.className ="";
	treningList3.className ="";
	treningList4.className ="";
}