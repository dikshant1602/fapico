document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const closeMenuButton = document.getElementById('close-menu'); // Get the close button

    // Only attach listeners if the elements exist on the page
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
            navbar.classList.add('active'); // Add 'active' to show menu
        });
    }

    if (closeMenuButton && navbar) {
        closeMenuButton.addEventListener('click', () => {
            navbar.classList.remove('active'); // Remove 'active' to hide menu
        });
    }

    // Optional: Close menu when a link inside it is clicked (good for single-page nav or if you want it to auto-close)
    if (navbar) { // Check if navbar exists on the page
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    }
});