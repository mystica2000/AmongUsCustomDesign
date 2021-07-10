const toggle = document.getElementsByClassName('toggle-button')[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0];

toggle.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})