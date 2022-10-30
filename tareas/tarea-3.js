// TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearBoton(id, texto){
    const boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.setAttribute('id', id);
    boton.textContent = texto;
    return boton;
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
function calcularTiempoTotal(){
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

function crearInputConLabel(texto) {
    const label = document.createElement('label');
    label.textContent = (`Ingrese la cantidad de ${texto} del video `);
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.className = (`cantidad-${texto}`);
    const $formulario = document.querySelector('#formulario-videos');
    $formulario.appendChild(label);
    $formulario.appendChild(input);
    return;
}

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function(){
    const $formulario = document.querySelector('#formulario-videos');
    for (let i = 0; i < Number(document.querySelector('#cantidad-videos').value); i++){
        const titulo = document.createElement(`h4`);
        titulo.textContent = `Clase ${i + 1}`;
        $formulario.appendChild(titulo);
        crearInputConLabel('horas');
        crearInputConLabel('minutos');
        crearInputConLabel('segundos');
        $formulario.appendChild(document.createElement('br'));
    }
    return false;
}
document.querySelector('#boton').appendChild(crearBoton('calcular-tiempo-total', 'Calcular tiempo total'));
const $botonCalcular = document.querySelector('#calcular-tiempo-total');
$botonCalcular.onclick = function() {
    document.querySelector('#tiempo-total').textContent = calcularTiempoTotal();
    return false;
}
document.querySelector('body').appendChild(crearBoton('resetear', 'Volver a empezar'));
const $botonResetear = document.querySelector('#resetear');
$botonResetear.onclick = function() {
    document.querySelector('#tiempo-total').textContent = '';
    const padre = document.querySelector('#formulario-videos');
    while (padre.lastChild) {
        padre.removeChild(padre.lastChild);
    }
    return false;
}
