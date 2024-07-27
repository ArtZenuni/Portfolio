function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
}
