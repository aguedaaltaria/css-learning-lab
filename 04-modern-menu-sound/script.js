// Definimos los datos del menú con su respectivo color temático
const menuData = [
    { icon: '🌍', title: 'Explore', subtitle: 'Global odyssey', badge: 'LIVE', color: '#00ffcc' },
    { icon: '🧭', title: 'Discover', subtitle: 'Algorithmic zephyr', badge: '+24', color: '#9d4edd' },
    { icon: '⭐', title: 'Studio', subtitle: 'Creator lab', badge: 'AI 4.0', color: '#ffb703' },
    { icon: '🔒', title: 'Vault', subtitle: 'Secure archive', badge: 'AES-256', color: '#2ec4b6' },
    { icon: '👤', title: 'Profile', subtitle: 'Identities & nodes', badge: 'PRO', color: '#ff3366' }
];

const menuList = document.getElementById('menuList');

function renderMenu() {
    menuData.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        
        // Guardamos el color único en una variable CSS personalizada (--item-color)
        li.style.setProperty('--item-color', item.color);

        // NOTA: Eliminamos la condición que ponía 'active' al último por defecto.
        // Ahora todos empiezan limpios y sin color fijo.

        li.innerHTML = `
            <div class="menu-item-left">
                <span class="menu-icon">${item.icon}</span>
                <div class="menu-info">
                    <h3>${item.title}</h3>
                    <p>${item.subtitle}</p>
                </div>
            </div>
            <span class="menu-badge">${item.badge}</span>
        `;

        // Evento de clic para activar el elemento seleccionado
        li.addEventListener('click', () => {
            document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
        });

        menuList.appendChild(li);
    });
}

renderMenu();