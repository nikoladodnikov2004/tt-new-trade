const audio = document.getElementById('champions-audio');
const musicIcon = document.getElementById('music-icon');

const SYSTEM_VOLUME = 0.02; 
audio.volume = SYSTEM_VOLUME;


function initialPlay() {
    if (audio.paused) {
        audio.volume = SYSTEM_VOLUME; 
        audio.play().catch(err => console.log("Блокирано автоматично пускане"));
        if(musicIcon) musicIcon.style.opacity = "1";
    }
    
    document.removeEventListener('click', initialPlay);
}
document.addEventListener('click', initialPlay);


function toggleMusic(event) {
    
    if(event) event.stopPropagation(); 
    
    if (audio.paused) {
        audio.volume = SYSTEM_VOLUME; 
        audio.play();
        if(musicIcon) musicIcon.style.opacity = "1";
    } else {
        audio.pause();
        if(musicIcon) musicIcon.style.opacity = "0.4";
    }
}

