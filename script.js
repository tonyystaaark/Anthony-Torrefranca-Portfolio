document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const navBar = document.getElementById('navBar');
    const hamburger = document.getElementById('hamburger');
    const navMobileMenu = document.getElementById('nav-menu');
    // Modal functionality
    const aboutModal = document.getElementById('about-modal');
    const contactLink = document.getElementById('contact');
    const modelPortrait = document.getElementById('model-portrait');

    function toggleMenu() {
        console.log("hamburger clicked");
        navMobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    hamburger.addEventListener('click', toggleMenu);

    function showAboutModal() {
        console.log("contact link clicked");
        modelPortrait.classList.toggle('active');
    }
    contactLink.addEventListener('click', ()=> {
        closeMenu();
        showAboutModal();
    });

    function closeMenu() {
    if (navMobileMenu.classList.contains('active')) {
        navMobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        }
    }
    document.addEventListener('click', (event) => {
        if (!navMobileMenu.classList.contains('active')) {
            return;
        }
        const isClickInsideMenu = navMobileMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            closeMenu();
        }
    });

});