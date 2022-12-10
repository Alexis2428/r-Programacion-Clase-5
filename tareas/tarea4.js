//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function borrarListaAnterior() {
    const $numeros = document.querySelectorAll('.numero');
    for (let i = 0; i < $numeros.length; i++) {
        $numeros[i].remove();
    }
}

function crearLista(cantidadNumeros) {
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

function obtenerNumeros($numeros) {
    const numeros = [];
    for (let i = 0; i < $numeros.length; i++) {
        numeros.push(Number($numeros[i].value));
    }
    return numeros;
}

function obtenerRespuesta(tipo, valor) {
    document.querySelector(`#numero-${tipo}`).textContent = valor;
}

function validarCantidadNumeros($cantidadNumeros) {
    const error = validarCantNumeros($cantidadNumeros.value);

    const esValido = manejarError(error, $cantidadNumeros);

    return esValido;
}

function validarCantNumeros(cantNumeros) {
    if ('' === cantNumeros) {
        return 'El campo cantidad-numeros no puede estar vacio';
    }

    if (!/^[0-9]+$/.test(cantNumeros)) {
        return 'El campo cantidad-numeros solo acepta números enteros';
    }

    return '';
}

function manejarError(error, $cantidadNumeros) {
    let noHayError = true;

    if (error) {
        noHayError = false;
        $cantidadNumeros.className = 'error';

        if (!comprobarExisteError(error)) {
            crearError(error);
        }

    } else {
        $cantidadNumeros.className = '';
    }

    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        if (error != $errores[i].innerText) {
            $errores[i].remove();
        }
    }

    return noHayError;
}

function comprobarExisteError(error) {
    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        if (error === $errores[i].textContent) {
            return true;
        }
    }

    return false;
}

function crearError(error) {
    const $error = document.createElement('li');
    $error.innerText = error;

    document.querySelector('#errores').appendChild($error);
}

function validarNumeros($listaNumeros) {
    const errores = {};
    for (let i = 0; i < $listaNumeros.length; i++) {
        errores[i] = validarNumero($listaNumeros[i].value);
    }

    const sonValidos = 0 === manejarErrores(errores, $listaNumeros)

    return sonValidos;
}

function validarNumero(numero) {
    if ('' === numero) {
        return 'El campo numero no puede estar vacio';
    }

    return '';
}

function manejarErrores(errores, $numeros) {
    let cantidadErrores = 0;

    Object.keys(errores).forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $numeros[key].className = 'error';

            if (!comprobarExisteError(error)) {
                crearError(error);
            }

        } else {
            $numeros[key].className = '';
        }
    })

    borrarErroresCorregidos(errores);

    return cantidadErrores;
}

function borrarErroresCorregidos(errores) {
    const $errores = document.querySelectorAll('#errores li');
    const valorErrores = Object.values(errores);

    for (let i = 0; i < $errores.length; i++) {
        let existeEnErrores = false;

        for (let j = 0; j < valorErrores.length; j++) {
            if ($errores[i].innerText === valorErrores[j]) {
                existeEnErrores = true;
                break;
            }
        }

        if (!existeEnErrores) {
            $errores[i].remove();
        }
    }
}

function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');

    for (let i = 0; i < $errores.length; i++) {
        $errores[i].remove();
    }
}

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function (event) {
    event.preventDefault();

    borrarListaAnterior();
    borrarErroresAnteriores();

    const $cantidadNumeros = document.querySelector('#cantidad-numeros');
    if (validarCantidadNumeros($cantidadNumeros)) {
        crearLista(Number($cantidadNumeros.value));

        mostrarBotonesCalculos();
        mostrarBotonReiniciar();

    } else {
        ocultarRespuestas();
        ocultarBotonesCalculos();
    }
}

const $botonObtenerPromedio = document.querySelector('#obtener-promedio');
$botonObtenerPromedio.onclick = function () {
    const $listaNumeros = document.querySelectorAll('.numero input');

    const sonValidos = validarNumeros($listaNumeros);

    if (sonValidos) {
        const numeros = obtenerNumeros($listaNumeros);

        obtenerRespuesta('promedio', obtenerPromedio(numeros).toFixed(2));
        mostrarRespuesta('promedio');

    } else {
        ocultarRespuestas();
    }
}

const $botonObtenerNumeroPequenio = document.querySelector('#obtener-numero-pequenio');
$botonObtenerNumeroPequenio.onclick = function () {
    const $listaNumeros = document.querySelectorAll('.numero input');

    const sonValidos = validarNumeros($listaNumeros);

    if (sonValidos) {
        const numeros = obtenerNumeros($listaNumeros);

        obtenerRespuesta('pequenio', obtenerNumeroMenor(numeros));
        mostrarRespuesta('pequenio');

    } else {
        ocultarRespuestas();
    }
}

const $botonObtenerNumeroGrande = document.querySelector('#obtener-numero-grande');
$botonObtenerNumeroGrande.onclick = function () {
    const $listaNumeros = document.querySelectorAll('.numero input');

    const sonValidos = validarNumeros($listaNumeros);

    if (sonValidos) {
        const numeros = obtenerNumeros($listaNumeros);

        obtenerRespuesta('grande', obtenerNumeroMayor(numeros));
        mostrarRespuesta('grande');

    } else {
        ocultarRespuestas();
    }
}

const $botonObtenerNumeroFrecuente = document.querySelector('#obtener-numero-frecuente');
$botonObtenerNumeroFrecuente.onclick = function () {
    const $listaNumeros = document.querySelectorAll('.numero input');

    const sonValidos = validarNumeros($listaNumeros);

    if (sonValidos) {
        const error = 'Debe tener minimo 2 números para obtener el más frecuente';

        if (1 < $listaNumeros.length) {
            const $errores = document.querySelectorAll('#errores li');

            for (let i = 0; i < $errores.length; i++) {
                if (error === $errores[i].textContent) {
                    $errores[i].remove();
                }
            }

            const numeros = obtenerNumeros($listaNumeros);

            obtenerRespuesta('frecuente', obtenerNumeroFrecuente(numeros));
            mostrarRespuesta('frecuente');

        } else {
            crearError(error);
            $listaNumeros[0].className = 'error';
        }
    } else {
        ocultarRespuestas();
    }
}

const $botonReiniciar = document.querySelector('#reiniciar');
$botonReiniciar.onclick = function () {
    ocultarRespuestas();
    ocultarBotonesCalculos();
    borrarListaAnterior();
    borrarErroresAnteriores();
    ocultarBotonReiniciar();
}
