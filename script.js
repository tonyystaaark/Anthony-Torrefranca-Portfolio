document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const navBar = document.getElementById('navBar');
    const hamburger = document.getElementById('hamburger');
    const navMobileMenu = document.getElementById('nav-menu');
    // Modal functionality
    const aboutModal = document.getElementById('about-modal');
    const contactLink = document.getElementById('navContact');
    const modelPortrait = document.getElementById('model-portrait');
    const closeSign = document.getElementById('close-sign');
    const cover = document.getElementById('cover');

    // hamburger
    function toggleMenu() {
        console.log("hamburger clicked");
        navMobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    hamburger.addEventListener('click', toggleMenu);

    function showAboutModal() {
        modelPortrait.classList.toggle('active');
    }
    // show/hide modal
    contactLink.addEventListener('click', ()=> {
        console.log("contact link clicked");
        closeMenu();
        showAboutModal();
        showCover();
    });

    // show/hide navBar
    function closeMenu() {
    if (navMobileMenu.classList.contains('active')) {
        navMobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        }
    }

    closeSign.addEventListener('click', function(){
        console.log("closeSign clicked");
        closeMenu();
        showAboutModal();
        showCover();
    })

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
    // cover .visibilityState
    function showCover(){
        console.log('show cover clicked')
            cover.classList.toggle('active');
        }
});