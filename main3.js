const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icons');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});