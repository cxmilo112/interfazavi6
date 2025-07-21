// JavaScript para controlar el menú lateral
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeMenu = document.getElementById('close-menu');
    const mainContent = document.querySelector('main'); // Selecciona la etiqueta <main>

    // Selecciona todos los elementos con la clase 'sidebar-item'
    const sidebarLinks = document.querySelectorAll('.sidebar-item');

    // Función para abrir el menú
    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('open'); // Agrega la clase 'open' para mostrar el sidebar
        mainContent.classList.add('shift'); // Agrega la clase 'shift' para desplazar el contenido principal
    });

    // Función para cerrar el menú
    closeMenu.addEventListener('click', function() {
        sidebar.classList.remove('open'); // Elimina la clase 'open' para ocultar el sidebar
        mainContent.classList.remove('shift'); // Elimina la clase 'shift' para restaurar el contenido principal
    });

    // Función para cerrar el menú al hacer clic en un enlace
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('open'); // Elimina la clase 'open'
            mainContent.classList.remove('shift'); // Elimina la clase 'shift'
        });
    });

    // Función para cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        // Verifica si el clic no fue dentro del sidebar ni del botón de alternar, y si el sidebar está abierto
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open'); // Elimina la clase 'open'
            mainContent.classList.remove('shift'); // Elimina la clase 'shift'
        }
    });
});