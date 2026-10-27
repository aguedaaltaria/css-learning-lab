const container = document.getElementById('mainContainer');
const signUpButton = document.getElementById('signUpBtn');
const signInButton = document.getElementById('signInBtn');

// Al hacer clic en Registrarse, desliza el panel hacia la izquierda
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

// Al hacer clic en Iniciar Sesión, regresa el panel a su lugar
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});