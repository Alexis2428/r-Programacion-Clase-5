// TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function (event) {
    event.preventDefault();

    borrarVideosAnteriores();
    crearVideos();
}

const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = obtenerRespuesta;

const $botonReiniciar = document.querySelector('#reiniciar');
$botonReiniciar.onclick = reiniciar;

function borrarVideosAnteriores() {
    const $videos = document.querySelectorAll('.video');
    for (let i = 0; i < $videos.length; i++) {
        $videos[i].remove();
    }
}

function crearVideos() {
    const cantidadClases = Number(document.querySelector('#cantidad-clases').value);

    if (0 < cantidadClases) {
        mostrarBotonCalcular();
        mostrarBotonReiniciar();
    }

    for (let i = 0; i < cantidadClases; i++) {
        crearVideo(i);
    }
}

function crearVideo(indice) {
    const $video = document.createElement('div');
    $video.className = 'video';

    const $tituloClase = document.createElement('h4');
    $tituloClase.textContent = `Clase ${indice + 1}`;
    $video.appendChild($tituloClase);

    crearTiempoVideo('horas', $video);
    crearTiempoVideo('minutos', $video);
    crearTiempoVideo('segundos', $video);

    const $videos = document.querySelector('#videos');
    $videos.appendChild($video);
}

function crearTiempoVideo(tipo, $video) {
    const $texto = document.createElement('label');
    $texto.textContent = `Ingrese la cantidad de ${tipo} del video de la clase `;
    const $cuadroTexto = document.createElement('input');
    $cuadroTexto.type = 'number';
    $cuadroTexto.className = `cantidad-${tipo}`;

    $video.appendChild($texto);
    $video.appendChild($cuadroTexto);
}

function obtenerRespuesta() {
    document.querySelector('#tiempo-total').textContent = obtenerTiempoTotal();
    mostrarRespuesta();
}

function obtenerTiempoTotal() {
    let totalSegundos = calcularTiempo('segundos');
    let totalMinutos = calcularTiempo('minutos');
    let totalHoras = calcularTiempo('horas');
    const LIMITE_SEGUNDOS_MINUTOS = 60;
    while (LIMITE_SEGUNDOS_MINUTOS < totalSegundos) {
        totalSegundos -= LIMITE_SEGUNDOS_MINUTOS;
        totalMinutos++;
    }
    while (LIMITE_SEGUNDOS_MINUTOS < totalMinutos) {
        totalMinutos -= LIMITE_SEGUNDOS_MINUTOS;
        totalHoras++;
    }
    return (`${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`);
}

function calcularTiempo(tipo) {
    let total = 0;
    const $tiempo = document.querySelectorAll(`.cantidad-${tipo}`);
    for (let i = 0; i < $tiempo.length; i++) {
        total += Number($tiempo[i].value);
    }
    return total;
}

function reiniciar() {
    borrarVideosAnteriores();
    ocultarBotonCalcular();
    ocultarRespuesta();
    ocultarBotonReiniciar();
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonReiniciar() {
    document.querySelector('#reiniciar').className = '';
}

function ocultarBotonReiniciar() {
    document.querySelector('#reiniciar').className = 'oculto';
}

function mostrarRespuesta() {
    document.querySelector('#respuesta').className = '';
}

function ocultarRespuesta() {
    document.querySelector('#respuesta').className = 'oculto';
}
