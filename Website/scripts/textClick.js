function textClick(a,b) {
 	var a = document.getElementById(a);
 	var b = document.getElementById(b);
 	if(a.style.display == 'none' || a.style.display == ''){
    	a.style.display = 'block';
    	b.innerHTML = '-';
    	b.style.right = "-9%";
    }
 	else{
    	a.style.display = 'none';
    	b.innerHTML = '+';
    	b.style.right = "-10%";
    }
}



