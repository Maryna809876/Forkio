const menuIcon = document.getElementById('menuIcon');
const menu = document.querySelector('.links');
const links = document.querySelectorAll('.links__item');

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    menuIcon.classList.toggle('menu-open');
    menu.classList.toggle('menu-open');

    if (menu.classList.contains('menu-open')) {
        window.addEventListener('click', function (event) {
            event.stopPropagation();

            if ([...links].includes(event.target)) { return; }
            else {
                menuIcon.classList.remove('menu-open');
                menu.classList.remove('menu-open');
            }
        })
    }
})
