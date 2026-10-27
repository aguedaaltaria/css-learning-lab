const lampToggle = document.getElementById('lampToggle');
const body = document.body;

lampToggle.addEventListener('click', () => {
    // 1. Efecto visual de estiramiento de la cuerda al jalar
    lampToggle.classList.add('pull');
    setTimeout(() => {
        lampToggle.classList.remove('pull');
    }, 150);

    // 2. Alternar entre encendido y apagado
    if (body.classList.contains('light-off')) {
        body.classList.remove('light-off');
        body.classList.add('light-on');
    } else {
        body.classList.remove('light-on');
        body.classList.add('light-off');
    }
});