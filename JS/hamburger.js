const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list-wrap');

hamburger.addEventListener('click', () => {
    nav_list.classList.toggle('nav-mobile-toggle');
})