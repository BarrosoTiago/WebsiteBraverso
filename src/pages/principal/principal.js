const menu = document.querySelector('.menu-navegacao');
const dropdown = document.querySelector('.menu-dropdown');

// Adicionando um evento de clique para dispositivos móveis
menu.addEventListener('click', () => {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Adicionando um evento de hover para desktop
menu.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        dropdown.style.display = 'block';
    }
});

menu.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        dropdown.style.display = 'none';
    }
});