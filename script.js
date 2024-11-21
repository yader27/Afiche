window.onload = function() {
    // Mostrar el logo y la imagen de fondo, luego de 2 segundos, mostrar "Presenta"
    setTimeout(function() {
        document.querySelector('.main-title-image').style.display = 'none'
        document.querySelector('.presenta-text').style.display = 'block';
    }, 400);

    // Después de 4 segundos, mostrar el resto de contenido
    setTimeout(function() {
        document.querySelector('.main-title-image').style.display = 'block';
        document.querySelector('.presenta-text').style.display = 'none';
        // Agrega cualquier otra animación si lo deseas
        document.querySelector('.main-title-image').classList.add('animate__fadeIn'); 
    }, 2000);
}