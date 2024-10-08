const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-button'); // ID correcto
let isPlaying = false; 

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play().catch((error) => {
            console.log('Error al reproducir el audio:', error);
        });
    } else {
        audio.pause();
    }
    isPlaying = !isPlaying; 
});

