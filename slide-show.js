"use-strict";

// initialise variables
let slideIndex = 1;
let autoPlay;
let playing = false;

// create objects to handle DOM elements
const slides = document.getElementsByClassName('slides');
const dots = document.getElementsByClassName('dot');

//wait a little before playing slideshow
setTimeout(playSlides, 4500);


// auto play through slides at 3 second intervals
function playSlides() {
    slideIndex++;
    showSlides(slideIndex);
    autoPlay = setTimeout(playSlides, 3000);
    playing = true;
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
        slides[x].className = slides[x].className.replace("first-slide", "previous-slide");
        slides[x].className = slides[x].className.replace("current-slide-left", "previous-slide");
        slides[x].className = slides[x].className.replace("current-slide", "previous-slide");
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
    if (e.keyCode == 32 && playing === true ||
        e.keyCode == 119 && playing === true) {
        clearTimeout(autoPlay);
        playing = false;
    } else if (e.keyCode == 32 && playing === false ||
        e.keyCode == 119 && playing === false) {
        playSlides();
        playing = true;
    } else if (e.keyCode == 39) {
        plusSlides();
    } else if (e.keyCode == 37) {
        minusSlides();
    }
}
