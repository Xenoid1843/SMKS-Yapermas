var audio = document.getElementById('myaudio');
audio.oncanplaythrough = function() {
    audio.volume = 0.1;
}
