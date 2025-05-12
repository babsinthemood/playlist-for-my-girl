// Animação nos títulos da playlist
window.onload = function () {
    const titles = document.querySelectorAll('.song-title, .song-quote');
    
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = 1;
            title.style.transform = 'translateY(0)';
        }, index * 200); // Delay para cada título aparecer com um intervalo
    });
};

// Funcionalidade de play/pausa de vídeo
const videos = document.querySelectorAll('iframe');

videos.forEach(video => {
    video.addEventListener('click', () => {
        let src = video.src;
        
        // Para reiniciar o vídeo ao clicar
        if (src.includes('autoplay=1')) {
            video.src = '';
            setTimeout(() => {
                video.src = src;
            }, 100);
        } else {
            video.src += '&autoplay=1';
        }
    });
});
