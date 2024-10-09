// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-img");

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // If slideIndex is greater than the number of slides, reset to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});
