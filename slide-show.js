let slideIndex = 1;
let autoPlay;
let playing = true;
const slides = document.getElementsByClassName('slides');
const dots = document.getElementsByClassName('dot');

playSlides();

function playSlides(){
	showSlides(slideIndex);
	autoPlay = setTimeout(playSlides, 3000);
	slideIndex++;
}



function showSlides(n) {
	let i;
	if (n > slides.length){ slideIndex = 1}
	if (n < 1) { slideIndex = slides.length}

	for (i = 0 ; i < slides.length; i ++) {
		slides[i].style.display = "none";
	}
	for (i = 0 ; i < dots.length ; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += " active";
}

// Next/Previous arrow function
function plusSlides(n) {
	showSlides(slideIndex +=  n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}


document.body.onkeyup = function(e) {
	if(e.keyCode == 32 && playing === true ||
		e.keyCode == 119 && playing === true) {
	clearTimeout(autoPlay);
	playing = false;
} else if(e.keyCode == 32 && playing === false ||
	e.keyCode == 119 && playing ===false) {
	playSlides();
	playing = true;
} else if (e.keyCode == 39) {
	plusSlides(1);
}else if (e.keyCode == 37) {
	plusSlides(-1);
}}
