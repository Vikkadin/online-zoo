/* current page */

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

/* burger menu */

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


/* animals slider */

const animalCardsBlock = document.querySelector('.cards-block');
const sliderLeft = document.querySelector('.slider-left');
const sliderCenter = document.querySelector('.slider-center');
const sliderRight = document.querySelector('.slider-right');
const slideLeftBtn = document.querySelector('.animals-block__left-btn');
const slideRightBtn = document.querySelector('.animals-block__right-btn');
let animalCards = Array.from(sliderCenter.getElementsByClassName('animal-card'));


function showRandom(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


slideLeftBtn.addEventListener('click', () => {

    slideLeftBtn.setAttribute('disabled', 'disabled');
    slideRightBtn.setAttribute('disabled', 'disabled');
    let centerClone = sliderCenter.cloneNode(true);
    showRandom(animalCards);

    for (let item of animalCards) {
        sliderLeft.append(item);
    }

    let leftClone = sliderLeft.cloneNode(true);
    sliderCenter.innerHTML = centerClone.innerHTML;
    animalCardsBlock.classList.add('cards-block-left', 'cards-block-non-click');

    animalCardsBlock.addEventListener('animationend', () => {
        animalCardsBlock.classList.remove('cards-block-left', 'cards-block-non-click');
        sliderCenter.innerHTML = leftClone.innerHTML;
        slideLeftBtn.removeAttribute('disabled');
        slideRightBtn.removeAttribute('disabled');
    })
});

slideRightBtn.addEventListener('click', () => {

    slideLeftBtn.setAttribute('disabled', 'disabled');
    slideRightBtn.setAttribute('disabled', 'disabled');
    let centerClone = sliderCenter.cloneNode(true);
    showRandom(animalCards);

    for (let item of animalCards) {
        sliderRight.append(item);
    }

    let rightClone = sliderRight.cloneNode(true);
    sliderCenter.innerHTML = centerClone.innerHTML;
    animalCardsBlock.classList.add('cards-block-right', 'cards-block-non-click');

    animalCardsBlock.addEventListener('animationend', () => {
        animalCardsBlock.classList.remove('cards-block-right', 'cards-block-non-click');
        sliderCenter.innerHTML = rightClone.innerHTML;
        slideLeftBtn.removeAttribute('disabled');
        slideRightBtn.removeAttribute('disabled');
    })
});

/* testimonials slider */

const testimonialsRange = document.querySelector('.testimonials-line_scroll');
const testimonialsCards = document.querySelector('.testimonials-cards');
const cardsList = document.querySelectorAll('.testimonial-card__frame');


function testimonialsShuffle(width) {
    testimonialsCards.style.left = `-${testimonialsRange.value * width}px`;
}

/* testimonials popup */
const testimonialsPopup = document.querySelector('.testimonials-popup');
const testimonialsPopupBox = document.querySelector('.testimonials-popup-block');
const testimonialsPopupCloseBtn = document.querySelector('.testimonials-popup_btn');

function togglePopup() {

    testimonialsPopup.classList.add('popup-shown', 'displayed');
    testimonialsPopupBox.innerHTML = this.innerHTML;

}

function closePopup() {

    let target = this.target;

    if (target === testimonialsPopup || target === testimonialsPopupCloseBtn) {
        testimonialsPopup.classList.remove('popup-shown', 'displayed');
    }

}

function closePopup(el) {

    let target = el.target;

    if (target === testimonialsPopup || target === testimonialsPopupCloseBtn) {
        testimonialsPopup.classList.remove('popup-shown', 'displayed');
    }

}

const desktop = window.matchMedia('(min-width: 1280px)');
const tablet = window.matchMedia('(max-width: 1279px)');
const mobile = window.matchMedia('(max-width: 980px)');

function handleScreens() {
    if (desktop.matches) {

        testimonialsRange.addEventListener('input', () => testimonialsShuffle(300));

        for (let item of cardsList) {
            item.removeEventListener('click', togglePopup);
        }

    } else if (tablet.matches && !mobile.matches) {

        testimonialsRange.addEventListener('input', () => testimonialsShuffle(325));

        for (let item of cardsList) {
            item.removeEventListener('click', togglePopup);
        }

    } else if (mobile.matches) {

        for (let item of cardsList) {
            item.addEventListener('click', togglePopup);
        }

    }
}

testimonialsPopup.addEventListener('click', (el) => closePopup(el));
window.addEventListener('resize', handleScreens);
handleScreens();