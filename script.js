var nome = window.prompt('Qual é seu nome?')
window.alert('É um prazer ter você aqui, ' + nome + "!")
var audio = document.getElementById('audioPlayer');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function changeVolume(value) {
    audio.volume = value;
}
