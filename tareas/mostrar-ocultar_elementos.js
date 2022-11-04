function mostrarBotonesCalculos() {
    document.querySelector('#botones-calculos').className = '';
}

function ocultarBotonesCalculos() {
    document.querySelector('#botones-calculos').className = 'oculto';
}

function mostrarRespuesta(tipo) {
    document.querySelector(`#respuesta-numero-${tipo}`).className = '';
}

function ocultarRespuestas() {
    ocultarRespuesta('promedio');
    ocultarRespuesta('pequenio');
    ocultarRespuesta('grande');
    ocultarRespuesta('frecuente');
}

function ocultarRespuesta(tipo) {
    document.querySelector(`#respuesta-numero-${tipo}`).className = 'oculto';
}

function mostrarBotonReiniciar() {
    document.querySelector('#reiniciar').className = '';
}

function ocultarBotonReiniciar() {
    document.querySelector('#reiniciar').className = 'oculto';
}
