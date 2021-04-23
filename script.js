window.addEventListener('load', function () {

    // PRZYKLEJANIE NAWIGACJI
    const navbar = document.querySelector('.nav-fixed');
    window.onscroll = () => {
        if (window.scrollY > 300) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };

    // OFERTA - BOXY
    const offerHeader = document.querySelectorAll('.offer-header');
    for (let i = 0; i < offerHeader.length; i++) {
        offerHeader[i].addEventListener('click', function () {
            this.classList.toggle('active');

            let textbox = this.nextElementSibling;
            textbox.classList.toggle('show');
        });
    }

    // NAV-MOBILE

    const navToggle = document.querySelector('.nav-mobile');
    const nav = document.querySelector('nav')
    const navLink = document.querySelectorAll('.nav-link')

    navToggle.addEventListener("click", function () {
        nav.classList.toggle('show');
    });

    for (let el = 0; el < navLink.length; el++) {
        navLink[el].addEventListener(
            'click', function () {
                nav.classList.remove('show');
            }
        )
    }

    // KONIEC SKRYPTÓW
});