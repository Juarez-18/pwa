
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const homeScreen = document.getElementById('home-screen');

    setTimeout(() => {
        splashScreen.style.display = 'none';
        homeScreen.style.display = 'block';
    }, 2000); // 2000 milisegundos (2 segundos)
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
        });
}
