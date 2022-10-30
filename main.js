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