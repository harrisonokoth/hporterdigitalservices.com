// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    const isVisible = window.scrollY > 300; // Use scrollY instead of pageYOffset

    // Toggle a 'visible' class based on scroll position
    if (isVisible) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll back to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
