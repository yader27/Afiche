window.onload = function () {
    const playButton = document.getElementById('play-button');
    const playText = document.getElementById('play-text'); // Texto dinámico
    const audio = document.getElementById('background-music');
    let isPlaying = false;

    // Cambiar ícono y texto, y controlar reproducción
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.src = 'assets/play-icon.svg'; // Ícono de Play
            playText.textContent = 'Play'; // Cambia texto a "Play"
        } else {
            audio.play().catch((error) => {
                console.error("Error reproduciendo el audio:", error);
                alert("Debes interactuar con la página para iniciar la música.");
            });
            playButton.src = 'assets/stop-icon.svg'; // Ícono de Stop
            playText.textContent = 'Stop'; // Cambia texto a "Stop"
        }
        isPlaying = !isPlaying;
    });

    // Animaciones y contenido adicional
    setTimeout(function () {
        document.querySelector('.main-title-image').style.display = 'none';
        document.querySelector('.presenta-text').style.display = 'block';
    }, 400);

    setTimeout(function () {
        document.querySelector('.main-title-image').style.display = 'block';
        document.querySelector('.presenta-text').style.display = 'none';
        document.querySelector('.main-title-image').classList.add('animate__fadeIn');
    }, 4000);

    // Animación de nieve
    const snowAnimation = document.getElementById('snow-animation');
    lottie.loadAnimation({
        container: snowAnimation,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/7239407f-fdcd-4120-8796-d9691ac376f2/ukL0NAraEo.json'
    });
};
