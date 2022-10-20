// TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearBotonLimpiar(){
    const botonLimpiar = document.createElement('button');
    botonLimpiar.setAttribute('type', 'reset');
    const textoBotonLimpiar = document.createTextNode('Limpiar');
    botonLimpiar.appendChild(textoBotonLimpiar);
    return botonLimpiar;
}
function crearBotonCalcular(){
    const botonCalcular = document.createElement('button');
    botonCalcular.setAttribute('type', 'button');
    botonCalcular.setAttribute('id', 'calcular-tiempo-total');
    const textoBotonCalcular = document.createTextNode('Calcular tiempo total');
    botonCalcular.appendChild(textoBotonCalcular);
    return botonCalcular;
}

function crearInput(texto){
    const elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('class', `cantidad-${texto}`);
    return elementoInput;
}
function crearLabel(texto){
    const elementoLabel = document.createElement('label');
    const textoLabel = document.createTextNode(`Ingrese la cantidad de ${texto} del video`);
    elementoLabel.appendChild(textoLabel);
    return elementoLabel;
}

function crearDiv (){
    const elementoDiv = document.createElement('div');
    const textoDiv = document.createTextNode('El tiempo total de los videos es ... ');
    elementoDiv.appendChild(textoDiv);
    const elementoStrong = document.createElement('strong');
    elementoStrong.setAttribute('id', 'tiempo-total');
    elementoDiv.appendChild(elementoStrong);
    return elementoDiv;
}

function calcularSegundos(){
    let total = 0;
    const segundos = document.querySelectorAll('.cantidad-segundos');
    for (let i = 0; i < segundos.length; i++){
        total += Number(segundos[i].value);
    }
    return total;
}
function calcularMinutos(){
    let total = 0;
    const minutos = document.querySelectorAll('.cantidad-minutos');
    for (let i = 0; i < minutos.length; i++) {
        total += Number(minutos[i].value);
    }
    return total;
}
function calcularHoras(){
    let total = 0;
    const horas = document.querySelectorAll('.cantidad-horas');
    for (let i = 0; i< horas.length; i++) {
        total += Number(horas[i].value);
    }
    return total;
}
function calcularTiempo(){
    let totalSegundos = calcularSegundos();
    let totalMinutos = calcularMinutos();
    let totalHoras = calcularHoras();
    const LIMITE_SEGUNDOS_MINUTOS = 60;
    while (totalSegundos > LIMITE_SEGUNDOS_MINUTOS) {
        totalSegundos -= LIMITE_SEGUNDOS_MINUTOS;
        totalMinutos++;
    }
    while (totalMinutos > LIMITE_SEGUNDOS_MINUTOS) {
        totalMinutos -= LIMITE_SEGUNDOS_MINUTOS;
        totalHoras++;
    }
    return (`${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`);
}

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function(){
    const formularioVideo = document.createElement('form');
    for (let i = 0; i < Number(document.querySelector('#cantidad-videos').value); i++){
        formularioVideo.appendChild(crearLabel('horas'));
        formularioVideo.appendChild(crearInput('horas'));
        formularioVideo.appendChild(crearLabel('minutos'));
        formularioVideo.appendChild(crearInput('minutos'));
        formularioVideo.appendChild(crearLabel('segundos'));
        formularioVideo.appendChild(crearInput('segundos'));
        const siguienteLinea = document.createElement('br');
        formularioVideo.appendChild(siguienteLinea);
    }
    formularioVideo.appendChild(crearBotonCalcular());
    formularioVideo.appendChild(crearBotonLimpiar());
    document.querySelector('body').appendChild(formularioVideo);
    document.querySelector('body').appendChild(crearDiv());
    const $botonCalcular = document.querySelector('#calcular-tiempo-total');
    $botonCalcular.onclick = function(){
        const tiempoTotal = calcularTiempo();
        document.querySelector('#tiempo-total').textContent = tiempoTotal;
        return false;
    }
    return false;
}
