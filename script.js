const tl = gsap.timeline({ defaults: { ease: "sine.out" } });

if (window.innerWidth > 800) {
    tl.to('.intro-p', { x: 200, opacity: 1, duration: 1, stagger: .5 });
}
else {
    tl.to('.intro-p', { x: 0, opacity: 1, duration: 1 })
};

tl.to('header', { opacity: 1, duration: 1 }, "-=1");
gsap.to('.card', { scrollTrigger: '.card-container', scale: 1, duration: 1, stagger: .5 });
gsap.to('article', { scrollTrigger: '.articles', scale: 1, duration: 1, stagger: .5 })

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
            textbox.classList.toggle('hide');
        });
    };

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
});