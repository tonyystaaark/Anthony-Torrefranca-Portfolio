document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navBar');
    const hamburger = document.getElementById('hamburger');
    const navMobileMenu = document.getElementById('nav-menu');
    const heroSection = document.getElementById("heroSection");
    const aboutModal = document.getElementById('about-modal');
    const contactLink = document.getElementById('navContact');
    const modelPortrait = document.getElementById('model-portrait');
    const closeSign = document.getElementById('close-sign');
    const modalCover = document.getElementById('modalCover');
    const bodyScroll = document.body;
    const navHome = document.getElementById("navHome");
    const navAbout = document.getElementById('navAbout');

    // show/hide modal
    navHome.addEventListener('click', ()=>{
        console.log("home link clicked");
        closeMenu();
    })

    navAbout.addEventListener('click', function(){
        console.log("aboutMe link clicked");
        closeMenu();
    })

    hamburger.addEventListener('click', toggleMenu);

    contactLink.addEventListener('click', ()=> {
        console.log("contact link clicked");
        closeMenu();
        showAboutModal();
        bodyNoScroll();
    });

    closeSign.addEventListener('click', function(){
        console.log("closeSign clicked");
        closeMenu();
        showAboutModal();
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
            console.log("menu toggled")
        }

        // no scroll when modal avtive
        function bodyNoScroll(){
            bodyScroll.classList.toggle('no-scroll');
            console.log("no scroll")
        }
        

    
// ------------------------------------------------------------
        
});