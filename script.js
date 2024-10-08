const shootingStarsContainer = document.getElementById('shooting-stars');

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

    // Posiciona la estrella fugaz en un lugar aleatorio
    const randomX = Math.random() * window.innerWidth;
    shootingStar.style.left = `${randomX}px`;
    shootingStar.style.top = `${window.innerHeight}px`; // Iniciar desde la parte inferior

    // Establece una duración aleatoria para la animación
    const randomDuration = Math.random() * 1 + 0.5; // Entre 0.5 y 1.5 segundos
    shootingStar.style.animationDuration = `${randomDuration}s`;

    // Añade la estrella fugaz al contenedor
    shootingStarsContainer.appendChild(shootingStar);

    // Elimina la estrella después de que la animación haya terminado
    shootingStar.addEventListener('animationend', () => {
        shootingStar.remove();
    });
}

// Crea estrellas fugaces cada 2 segundos
setInterval(createShootingStar, 2000);

// Mostrar la imagen "Emily" al hacer clic en la estrella grande
document.getElementById('big-star').addEventListener('click', function() {
    const nameImage = document.getElementById('name-image');
    nameImage.style.display = 'block'; // Mostrar la imagen
    setTimeout(() => {
        nameImage.style.opacity = 1; // Hacerla visible
    }, 10); // Pequeño delay para activar la transición
});
