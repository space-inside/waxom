let header = document.querySelector('.header');
let burger = document.getElementById('burger');


burger.addEventListener('change', event => {
    if(burger.checked) {
        header.classList.add('header__add');
    }
    else {
        header.classList.remove('header__add');
    }
})
