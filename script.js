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


//     hamburger.addEventListener('click', toggleMenu);


//     // show/hide modal
//     navHome.addEventListener('click', () =>{
//         navMobileMenu.classList.toggle('active');
//     })
//     navAbout.addEventListener('click', () =>{
//         navMobileMenu.classList.toggle('active');
//     })
    
//     navContact.addEventListener('click', ()=> {
//         console.log("contact link clicked");
//         handleNavClick();
//         contactMeModal();
//         toggleMenu();
//     });

//     closeSign.addEventListener('click', function(){
//         console.log("closeSign clicked");
//         handleNavClick();
//         contactMeModal  ();
//     });

    
// //----------------FUNCTIONS-----------------------------

//             // show/hide navBar
//     function handleNavClick(){
//         scroll();
//     }

//     // no scroll when modal avtive
//     function scroll(){
//         if (!bodyEl.classList.contains('no-scroll')){
//             bodyEl.classList.add('no-scroll');
//         }else{
//             bodyEl.classList.remove('no-scroll');
//         }
//         console.log("scroll")
//     }

//     // hamburger
//     function toggleMenu() {
//         console.log("toggle menu clicked");
//         if(!navMobileMenu.classList.contains('active')){
//             navMobileMenu.classList.toggle('active');
//             hamburger.classList.toggle('active');
//         } return;
//     }
    
//     function contactMeModal(){
//         if(!modelPortrait.classList.contains('active')){
//             modelPortrait.classList.add('active');
//         } else{
//             return;
//         }
//     }

//     function homeModalRemoval() {
//         if(modelPortrait.classList.contains('active')){
//             modelPortrait.classList.remove('active');            
//         }
//         return;
//     }

// // ------------------------------------------------------------
//         // if else statement
    
//     document.addEventListener('click', (event) => {
//         if (!navMobileMenu.classList.contains('active')) {
//             return;
//         }
//         const isClickInsideMenu = navMobileMenu.contains(event.target);
//         const isClickOnHamburger = hamburger.contains(event.target);

//         if (!isClickInsideMenu && !isClickOnHamburger) {
//             closeMenu();
//         }
//     });

//     function closeAll(){
//         if(modelPortrait.classList.contains('active')){
//             modelPortrait.classList.toggle('active');
//             navMobileMenu.classList.toggle('active');
//             hamburger.classList.toggle('active');
//             toggleMenu();
//         }else{
//             return
//         }
//     }
    
//     document.addEventListener('click', (event) => {
//         if (!navMobileMenu.classList.contains('active')) {
//             return;
//         }
//         const isClickInsideMenu = navMobileMenu.contains(event.target);
//         const isClickOnHamburger = hamburger.contains(event.target);

//         if (!isClickInsideMenu && !isClickOnHamburger) {
//             closeMenu();
//         }
//     });
        
    // navHome.addEventListener('click', ()=>{
    //     if(bodyEl.classList.contains('no-scroll')){
    //         bodyEl.classList.toggle('no-scroll');
    //         modelPortrait.classList.toggle('active');
    //     }
    // });

});