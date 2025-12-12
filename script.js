document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById("heroSection");
    const bodyEl = document.body;

    // nav menu
    const navMobileMenu = document.getElementById('nav-menu');
    const navBar = document.getElementById('navBar');
    const navHome = document.getElementById("navHome");
    const navAbout = document.getElementById('navAbout');
    const navSkills = document.getElementById('navSkills')
    const navContact = document.getElementById('navContact');
    const hamburger = document.getElementById('hamburger');

    // modal area
    const modalCover = document.getElementById('modalCover');
    const modelPortrait = document.getElementById('model-portrait');
    const closeSign = document.getElementById('close-sign');

    hamburger.addEventListener('click', modalEventClick);

    navHome.addEventListener('click', navLinks);

    navAbout.addEventListener('click', navLinks);

    navSkills.addEventListener('click', navLinks)

    navContact.addEventListener('click', contactEvent)

    closeSign.addEventListener('click', closeSignClick);

    function modalEventClick(){
        hamburgerEvent();
        navMobileMenuToggle();
    }

    function hamburgerEvent(){
        hamburger.classList.toggle('active');
    }

    function navMobileMenuToggle(){
        navMobileMenu.classList.toggle('active');
    }

    function contactEvent(){
        modelPortrait.classList.toggle('active');
        modalEventClick();
        bodyNoScroll();
    }

    function bodyNoScroll(){
        bodyEl.classList.toggle('no-scroll');
    }

    function navLinks(){
        if(navMobileMenu.classList.contains('active')){
            navMobileMenu.classList.remove('active');
            bodyEl.classList.remove('no-scroll');
            modelPortrait.classList.remove('active');
        }
        if( hamburger.classList.contains('active')){
            hamburger.classList.remove('active');
        }
    }

    function closeSignClick(){
        bodyEl.classList.remove('no-scroll');
        modelPortrait.classList.remove('active');
    }


});