document.addEventListener('DOMContentLoaded', () => {
    // Hacemos una petición fetch al backend para obtener los laboratorios en formato JSON
    fetch('/api/exercises')
        .then(response => response.json())
        .then(exercises => {
            const listContainer = document.getElementById('exercise-list');
            const emptyMessage = document.getElementById('empty-message');

            if (exercises.length === 0) {
                emptyMessage.style.display = 'block';
                return;
            }

            // Recorremos cada laboratorio y creamos los elementos HTML con JS puro
            exercises.forEach(ex => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                
                // Extraemos el número (ej: '01' de '01-radial-dock-menu')
                const numberPart = ex.split('-')[0];
                
                a.href = `/${numberPart}`;
                a.textContent = `Laboratorio: ${ex}`;
                
                li.appendChild(a);
                listContainer.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar los laboratorios:', error));
});