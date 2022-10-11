// TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function calcularHoras(){
    const cantidadHoras1 = Number(document.querySelector('#cantidad-horas-1').value);
    const cantidadHoras2 = Number(document.querySelector('#cantidad-horas-2').value);
    const cantidadHoras3 = Number(document.querySelector('#cantidad-horas-3').value);
    const cantidadHoras4 = Number(document.querySelector('#cantidad-horas-4').value);
    const cantidadHoras5 = Number(document.querySelector('#cantidad-horas-5').value);
    return cantidadHoras1 + cantidadHoras2 + cantidadHoras3 + cantidadHoras4 + cantidadHoras5;
}
function calcularMinutos(){
    const cantidadMinutos1 = Number(document.querySelector('#cantidad-minutos-1').value);
    const cantidadMinutos2 = Number(document.querySelector('#cantidad-minutos-2').value);
    const cantidadMinutos3 = Number(document.querySelector('#cantidad-minutos-3').value);
    const cantidadMinutos4 = Number(document.querySelector('#cantidad-minutos-4').value);
    const cantidadMinutos5 = Number(document.querySelector('#cantidad-minutos-5').value);
    return cantidadMinutos1 + cantidadMinutos2 + cantidadMinutos3 + cantidadMinutos4 + cantidadMinutos5;
}
function calcularSegundos(){
    const cantidadSegundos1 = Number(document.querySelector('#cantidad-segundos-1').value);
    const cantidadSegundos2 = Number(document.querySelector('#cantidad-segundos-2').value);
    const cantidadSegundos3 = Number(document.querySelector('#cantidad-segundos-3').value);
    const cantidadSegundos4 = Number(document.querySelector('#cantidad-segundos-4').value);
    const cantidadSegundos5 = Number(document.querySelector('#cantidad-segundos-5').value);
    return cantidadSegundos1 + cantidadSegundos2 + cantidadSegundos3 + cantidadSegundos4 + cantidadSegundos5;
}

const $botonCalcular = document.querySelector('#calcular-tiempo-total');
$botonCalcular.onclick = function(){
    let totalHoras = calcularHoras();
    let totalMinutos = calcularMinutos();
    let totalSegundos = calcularSegundos();
    const CAMBIO_MEDIDA = 60;
    if (totalSegundos > CAMBIO_MEDIDA) {
        while (totalSegundos > CAMBIO_MEDIDA) {
            totalSegundos -= CAMBIO_MEDIDA;
            totalMinutos++;
        }
    }
    if (totalMinutos > CAMBIO_MEDIDA) {
        while (totalMinutos > CAMBIO_MEDIDA) {
            totalMinutos -= CAMBIO_MEDIDA;
            totalHoras++;
        }
    }
    const tiempoTotal = `${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`;
    document.querySelector('#tiempo-total').innerText = tiempoTotal;
    return false
}
