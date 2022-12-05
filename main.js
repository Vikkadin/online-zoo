document.addEventListener('DOMContentLoaded', function () {
    const selector = '.nav__link';
    const elems = Array.from(document.querySelectorAll(selector));
    const navigation = document.querySelector('nav');

    function makeActive(evt) {
        const target = evt.target;

        if (!target || !target.matches(selector)) {
            return;
        }

        elems.forEach(elem => elem.classList.remove('current-page'));

        evt.target.classList.add('current-page');
    };

    navigation.addEventListener('mousedown', makeActive);

});





const burger = document.querySelector('.burger');
const navMenuMobile = document.querySelector('.logo_and_menu');
const logoMobile = document.querySelector('.logo-burger');
const pageFader = document.querySelector('.page-fade');


function navSwitcher(el) {

    let target = el.target;

    if (target === burger) {

        burger.classList.toggle('burger-x')
        navMenuMobile.classList.toggle('burger-open');
        logoMobile.classList.toggle('logo-fader');
        pageFader.classList.toggle('displayed');
        pageFader.classList.toggle('page-fader');

    } else if ((target.closest('.nav__item') || target.closest('.designed')) && !target.closest('.current-page')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');
        logoMobile.classList.remove('logo-fader');
        pageFader.classList.remove('displayed', 'page-fader');

    } else if (target != navMenuMobile && !target.closest('.nav-block') && !target.closest('.nav-wrapper')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');
        logoMobile.classList.remove('logo-fader');
        pageFader.classList.remove('displayed', 'page-fader');

    }

}

document.addEventListener('click', navSwitcher);