const menuContainer = document.querySelector('.menu-container');
const menuToggle = document.getElementById('menuToggle');

// Al hacer clic, pone o quita la clase 'active'
menuToggle.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});