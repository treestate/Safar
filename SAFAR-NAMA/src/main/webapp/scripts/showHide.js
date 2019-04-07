function toggleSection(id, imgId) {
	var tohide = document.getElementById(id);
	var arrow = document.getElementById(imgId);
	if(tohide.style.display == "block") {
		tohide.style.display = "none";
		arrow.src = "img/hide-arrow1.png";
	} else { 
		tohide.style.display = "block";
		arrow.src = "img/show-arrow1.png";
	}
}


function toggleSection1(id) {
	var tohide = document.getElementById(id);

	if(tohide.style.display == "block") {
		tohide.style.display = "none";

	} else { 
		tohide.style.display = "block";

	}
}