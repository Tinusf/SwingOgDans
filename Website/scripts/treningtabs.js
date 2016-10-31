function openInfo(evt, infoName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("conteinerInfo");
    for (i = 0; i < x.length; i += 1) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i += 1) {
        tablinks[i].className = tablinks[i].className(" borderActive", "");
    }
    document.getElementById(infoName).style.display = "block";
    evt.currentTarget.firstElementChild.className += "borderActive";
}