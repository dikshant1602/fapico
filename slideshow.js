let slideIndex = 0; // Start with index 0 for simplicity

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex and reset if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Call showSlides again after a delay (e.g., 5000ms = 5 seconds)
  setTimeout(showSlides, 5000);
}

// Start the slideshow when the script loads
document.addEventListener('DOMContentLoaded', showSlides);