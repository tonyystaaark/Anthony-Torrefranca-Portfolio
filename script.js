document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const navBar = document.getElementById('navBar');
    const hamburger = document.getElementById('hamburger');
    const navMobileMenu = document.getElementById('nav-menu');

    // Modal functionality
    const heroSection = document.getElementById("heroSection");
    const aboutModal = document.getElementById('about-modal');
    const contactLink = document.getElementById('navContact');
    const modelPortrait = document.getElementById('model-portrait');
    const closeSign = document.getElementById('close-sign');
    const modalCover = document.getElementById('modalCover');

    hamburger.addEventListener('click', toggleMenu);

    // show/hide modal
    contactLink.addEventListener('click', ()=> {
        console.log("contact link clicked");
        closeMenu();
        showAboutModal();
        showModalCover();
    });

    closeSign.addEventListener('click', function(){
        console.log("closeSign clicked");
        closeMenu();
        showAboutModal();
        showModalCover();
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
    
//----------------FUNCTIONS-----------------------------
        // cover .visibilityState
        function showModalCover(){
            console.log('show cover clicked')
                modalCover.classList.toggle('active');
        }

        // show/hide navBar
        function closeMenu() {
        if (navMobileMenu.classList.contains('active')) {
            navMobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            }
        }

        // hamburger
        function toggleMenu() {
            console.log("hamburger clicked");
            navMobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
        function showAboutModal() {
            modelPortrait.classList.toggle('active');
        }
    
// ------------------------------------------------------------
        
        const bodyClicked = document.body;

        bodyClicked.addEventListener('click', function(){
            console.log("body clicked");
        })



});