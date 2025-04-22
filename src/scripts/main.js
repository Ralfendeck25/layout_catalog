'use strict';

const toggleButton = document.querySelector('.header__toggle');

const navList = document.querySelector('.nav__list');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('is-open');

});

