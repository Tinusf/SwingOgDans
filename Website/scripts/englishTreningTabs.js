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
	treningsKurs.innerHTML = "Swing (Advanced)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Armfeldtsalen";
	treningsTekst.innerHTML = "This course is intended for those who have danced swing for at least one year (two semesters) with us. The course focuses on advanced rides and technique, with some other spices for example: Boy with two girls and jump / lift. If you are unsure which level you should be on, or wonder something else: do not hesitate to contact one of the instructors. We recommend having been through at least two semesters with beginners course before joining the secondary party, this is important to maintain the level of this course for all participants, since we unfortunately only have courses on two levels.";
});

treningList2.addEventListener("click", function() { 
	treningsTid.innerHTML="18:30 – 20:00";
	treningsKurs.innerHTML = "Swing (Beginner)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Aerobics-hall og Basement-hall";
	treningsTekst.innerHTML ="The beginners course in swing suitable for those who have never danced before and those who have danced less than 1-2 years, but is also very educational for everyone else. We start with 1.5 hours of instruction, and then there free-dance the rest of the evening. It instructed 4-speed swing (the most common swing-type in Norway). We keep quite basic intro courses the first three times in each semester, for these are autumn and spring masters different, so that you learn new things throughout the year. That is if you can try their hand at the upper portion if one feels in control after two semesters. ";
});

treningList3.addEventListener("click", function() { 
	treningsTid.innerHTML="20.00 – 22.00";
	treningsKurs.innerHTML = "Folk dance (Everyone)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen Basement-hall";
	treningsTekst.innerHTML = "Would you like to learn Norwegian folk dance? Or have you danced before, but miss someone to dance with? All are welome, regardless of level. We focus on reinlender, waltz, pols and Halling, but during the semester, we can also come by springar, polka, tango and much more fun! We emphasize to teach it to lead and to follow, which is essential in all couples dance. Folk dance trainings can therefore also be a useful supplement for those involved with other dances. We travel too happy together on the dance evenings in the Trondheim area and organizes joint trips to Rørosmartnan and Hilmarfestivalen..Kalender";
});

treningList4.addEventListener("click", function() { 
	treningsTid.innerHTML="20.30 – 22.00";
	treningsKurs.innerHTML = "Free-dance Swing (Everyone)";
	treningsSted.innerHTML = "Idrettsbygget Gløshaugen, Aerobics-hall";
	treningsTekst.innerHTML = "Free-dance (dancing freely with whomever they wish) for all who wish to join. Come and dance, and practice what you learned in previous beginners or advanced training!";
});
