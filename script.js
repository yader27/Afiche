window.onload = function () {
    // Mostrar el logo y la imagen de fondo, luego de 2 segundos, mostrar "Presenta"
    setTimeout(function () {
        document.querySelector('.main-title-image').style.display = 'none'
        document.querySelector('.presenta-text').style.display = 'block';
    }, 400);

    // Después de 4 segundos, mostrar el resto de contenido
    setTimeout(function () {
        document.querySelector('.main-title-image').style.display = 'block';
        document.querySelector('.presenta-text').style.display = 'none';
        // Agrega cualquier otra animación si lo deseas
        document.querySelector('.main-title-image').classList.add('animate__fadeIn');
    }, 4000);

    // Selecciona el contenedor
    const snowAnimation = document.getElementById('snow-animation');

    // Carga la animación usando Lottie
    lottie.loadAnimation({
        container: snowAnimation, // Contenedor donde se reproducirá
        renderer: 'svg', // Usa el renderizador SVG para mejor calidad
        loop: true, // La animación se repite indefinidamente
        autoplay: true, // La animación inicia automáticamente
        path: 'https://lottie.host/7239407f-fdcd-4120-8796-d9691ac376f2/ukL0NAraEo.json' // Ruta al archivo JSON de la animación
    });
}