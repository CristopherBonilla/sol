let audioActual = null;
let controlesActuales = null;

function reproducirAudio(idAudio, idControles) {
    const nuevoAudio = document.getElementById(idAudio);
    const nuevosControles = document.getElementById(idControles);

    if (audioActual && audioActual !== nuevoAudio) {
        audioActual.pause();
        audioActual.currentTime = 0;
        controlesActuales.style.display = 'none';
    }

    nuevoAudio.play();
    nuevosControles.style.display = 'block';

    audioActual = nuevoAudio;
    controlesActuales = nuevosControles;

    // Actualizar la barra de progreso en tiempo real
    nuevoAudio.addEventListener('timeupdate', () => {
        const barraProgreso = document.getElementById(`barraProgreso${idAudio.replace('audio', '')}`);
        if (nuevoAudio.duration) {
            barraProgreso.value = (nuevoAudio.currentTime / nuevoAudio.duration) * 100;
        }
    });
}

function pausarAudio(idAudio) {
    const audio = document.getElementById(idAudio);
    audio.pause();
}

function detenerAudio(idAudio) {
    const audio = document.getElementById(idAudio);
    audio.pause();
    audio.currentTime = 0;
    if (controlesActuales) {
        controlesActuales.style.display = 'none';
    }
}

function adelantarAudio(idAudio, segundos) {
    const audio = document.getElementById(idAudio);
    audio.currentTime += segundos;
}

function retrocederAudio(idAudio, segundos) {
    const audio = document.getElementById(idAudio);
    audio.currentTime -= segundos;
}

function cambiarProgreso(idAudio, idBarraProgreso) {
    const audio = document.getElementById(idAudio);
    const barraProgreso = document.getElementById(idBarraProgreso);
    audio.currentTime = (barraProgreso.value / 100) * audio.duration;
}
