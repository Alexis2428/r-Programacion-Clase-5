//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function(event) {
    event.preventDefault();

    borrarListaAnterior();
    crearLista();
}

const $botonObtenerPromedio = document.querySelector('#obtener-promedio');
$botonObtenerPromedio.onclick = function() {
    const numeros = obtenerNumeros();

    if ('' === validarNumeros(numeros)) {
        obtenerRespuesta('promedio', obtenerPromedio(numeros).toFixed(2));
        mostrarRespuesta('promedio');
    } else {
        alert(validarNumeros(numeros));
    }
}

const $botonObtenerNumeroPequenio = document.querySelector('#obtener-numero-pequenio');
$botonObtenerNumeroPequenio.onclick = function() {
    const numeros = obtenerNumeros();

    if ('' === validarNumeros(numeros)) {
        obtenerRespuesta('pequenio', obtenerNumeroMenor(numeros));
        mostrarRespuesta('pequenio');
    } else {
        alert(validarNumeros(numeros));
    }
}

const $botonObtenerNumeroGrande = document.querySelector('#obtener-numero-grande');
$botonObtenerNumeroGrande.onclick = function() {
    const numeros = obtenerNumeros();

    if ('' === validarNumeros(numeros)) {
        obtenerRespuesta('grande', obtenerNumeroMayor(numeros));
        mostrarRespuesta('grande');
    } else {
        alert(validarNumeros(numeros));
    }
}

const $botonObtenerNumeroFrecuente = document.querySelector('#obtener-numero-frecuente');
$botonObtenerNumeroFrecuente.onclick = function() {
    const numeros = obtenerNumeros();

    if ('' === validarNumeros(numeros)) {
        if (1 < numeros.length) {
            obtenerRespuesta('frecuente', obtenerNumeroFrecuente(numeros));
            mostrarRespuesta('frecuente');
        } else {
            alert('Debe tener minimo 2 números para obtener el más frecuente');
        }
    } else {
        alert(validarNumeros(numeros));
    }
}

const $botonReiniciar = document.querySelector('#reiniciar');
$botonReiniciar.onclick = function() {
    ocultarRespuestas();
    ocultarBotonesCalculos();
    borrarListaAnterior();
    ocultarBotonReiniciar();
}

function borrarListaAnterior() {
    const $numeros = document.querySelectorAll('.numero');
    for (let i = 0; i < $numeros.length; i++) {
        $numeros[i].remove();
    }
}

function crearLista() {
    const cantidadNumeros = Number(document.querySelector('#cantidad-numeros').value);
    if (0 < cantidadNumeros) {
        mostrarBotonesCalculos();
        mostrarBotonReiniciar();
    } else {
        ocultarRespuestas();
        ocultarBotonesCalculos();
    }

    for (let i = 0; i < cantidadNumeros; i++) {
        crearNumero();
    }
}

function crearNumero() {
    const $numero = document.createElement('li');
    $numero.className = 'numero';

    const $texto = document.createElement('label');
    $texto.textContent = `Ingrese el número `;
    const $cuadroTexto = document.createElement('input');
    $cuadroTexto.type = 'number';

    $numero.appendChild($texto);
    $numero.appendChild($cuadroTexto);

    const $listaNumeros = document.querySelector('#lista-numeros');
    $listaNumeros.appendChild($numero);
}

function obtenerNumeros() {
    const numeros = [];
    const $numeros = document.querySelectorAll('.numero input');
    for (let i = 0; i < $numeros.length; i++) {
        if ('' !== $numeros[i].value) {
            numeros.push(Number($numeros[i].value));
        }
    }
    return numeros;
}

function obtenerRespuesta(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function validarNumeros(numeros) {
    if (0 === numeros.length) {
        return 'Debe ingresar números en la lista antes de pulsar un botón';
    }

    return '';
}
