document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.client-logo-slideshow');

    if (slideshow) {
        // Optional: Pause animation on hover
        slideshow.addEventListener('mouseenter', () => {
            slideshow.style.animationPlayState = 'paused';
        });

        slideshow.addEventListener('mouseleave', () => {
            slideshow.style.animationPlayState = 'running';
        });
    }
});