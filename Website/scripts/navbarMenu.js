function navBarMenu() {
    var navbarID = document.getElementById("navbarID");
    if (navbarID.className === "navbarClass") {
        navbarID.className += " responsive";
    } else {
        navbarID.className = "navbarClass";
    }
}