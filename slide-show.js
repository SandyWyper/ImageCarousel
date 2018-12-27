"use-strict";

// initialise variables
let slideIndex = 1;
let autoPlay;
let playing = false;

// create objects to handle DOM elements
const slides = document.getElementsByClassName('slides');
const dots = document.getElementsByClassName('dot');
const pause = document.getElementById("pause");
pause.addEventListener("click", playOrPause);


// decide whether to play or pause
function playOrPause() {
    if (playing) {
        playing = false;
        pauseSlides();
    } else {
        playing = true;
        playSlides();
    }

}


// auto play through slides at 3 second intervals
function playSlides() {
    // change the play button to a pause button
    pause.innerHTML = '<i class="far fa-pause-circle"></i>';

    slideIndex++;
    showSlides(slideIndex);
    autoPlay = setTimeout(playSlides, 3000);
    playing = true;
}

//pause the slideshow
function pauseSlides() {
	// change the pause button to a play button
    pause.innerHTML = '<i class="far fa-play-circle"></i>';
    clearTimeout(autoPlay);
    playing = false;
}

// display a given slide
function showSlides(n) {
    //take 'n' as an input of the slideIndex to be displayed

    //if slide index is too large, reset to 1
    if (n > slides.length) { slideIndex = 1 }

    // if slide index is less than 1, then set to maximum
    if (n < 1) { slideIndex = slides.length }

    // if any slide has a class of "current-slide" change to previous-slide.
    for (let x = 0; x < slides.length; x++) {
        slides[x].className = slides[x].className.replace("previous-slide", "");
        slides[x].className = slides[x].className.replace("first-slide", "previous-slide");
        slides[x].className = slides[x].className.replace("current-slide-left", "previous-slide");
        slides[x].className = slides[x].className.replace("current-slide", "previous-slide");
    }

    // if any dot has a class of "active" remove the class.
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    //set slide of given index to have "current-slide" class
    slides[slideIndex - 1].classList.add('current-slide');

    //set dot of given index to have a class of "active"
    dots[slideIndex - 1].className += " active";
}


// Next slide function
function plusSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

function minusSlides() {
    slideIndex--;
    showPrevSlide(slideIndex);
}

function showPrevSlide(n) {
    //same as the other function, but in reverse
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let x = 0; x < slides.length; x++) {
        slides[x].className = slides[x].className.replace("previous-slide", "");
        slides[x].className = slides[x].className.replace("first-slide", "previous-slide-left");
        slides[x].className = slides[x].className.replace("current-slide-left", "previous-slide-left");
        slides[x].className = slides[x].className.replace("current-slide", "previous-slide-left");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].classList.add('current-slide-left');
    dots[slideIndex - 1].className += " active";
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


//listens for keyboard presses and take appropriate action
document.body.onkeyup = function(e) {
    // if the space bar or F8 is pressed then pause or start the slide show
    if (e.keyCode == 32 && playing === true ||
        e.keyCode == 119 && playing === true) {
        pauseSlides();
    } else if (e.keyCode == 32 && playing === false ||
        e.keyCode == 119 && playing === false) {
        playSlides();
        // if an arrow key is pressed then stop the slideshow and move to relevent slide.
    } else if (e.keyCode == 39) {
        if (playing === true) {
            pauseSlides();
        }
        plusSlides();
    } else if (e.keyCode == 37) {
        if (playing === true) {
            pauseSlides();
        }
        minusSlides();
    }
}