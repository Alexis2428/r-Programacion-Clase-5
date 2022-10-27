//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function crearRespuesta(texto, id){
    const $elementoP = document.querySelector('#texto-resultado');
    const nodoTexto = document.createTextNode(texto);
    $elementoP.appendChild(nodoTexto);
    const elementoEm = document.createElement('em');
    elementoEm.setAttribute('id', id);
    $elementoP.appendChild(elementoEm);
    const siguienteLinea = document.createElement('br');
    $elementoP.appendChild(siguienteLinea);
    return false
}

function calcularPromedio(numeros) {
    let sumaTotal = 0
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += Number(numeros[i].value);
    }
    return (sumaTotal / numeros.length).toFixed(2);
}
function obtenerNumeroPequenio(numeros) {
    let numeroPequenio = numeros[0].value;
    for (let i = 1; i < numeros.length; i++) {
        if (numeroPequenio > numeros[i].value) {
            numeroPequenio = numeros[i].value;
        }
    }
    return numeroPequenio;
}
function obtenerNumeroGrande(numeros) {
    let numeroGrande = numeros[0].value;
    for (let i = 1; i < numeros.length; i++) {
        if (numeroGrande < numeros[i].value) {
            numeroGrande = numeros[i].value;
        }
    }
    return numeroGrande;
}
function obtenerNumeroMasRepetido(numeros) {
    let numeroMasRepetido;
    let cantidadRepetido = 0;
    for (let i = 0; i < numeros.length; i++) {
        let repetido = 0;
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i].value === numeros[j].value) {
                repetido++;
            }
        }
        if (cantidadRepetido < repetido) {
            numeroMasRepetido = numeros[i].value;
            cantidadRepetido = repetido;
        }

    }
    return numeroMasRepetido;
}

function crearBoton(texto, id){
    const botonCalcular = document.createElement('button');
    botonCalcular.setAttribute('type', 'button');
    botonCalcular.setAttribute('id', id);
    const textoBoton = document.createTextNode(texto);
    botonCalcular.appendChild(textoBoton);
    return botonCalcular;
}

function crearNodoLista(){
    const elementoLista = document.createElement('li');
    const elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('class', 'lista');
    elementoLista.appendChild(elementoInput);
    return elementoLista;
}
function crearLista(){
    const elementoListaOrdenada = document.createElement('ol');
    const labelLista = document.createElement('label');
    const textoLabel = document.createTextNode('Ingrese los números');
    labelLista.appendChild(textoLabel);
    elementoListaOrdenada.appendChild(labelLista);
    for (let i = 0; i < Number(document.querySelector('#cantidad-numeros-ingresar').value); i++) {
        elementoListaOrdenada.appendChild(crearNodoLista());
    }
    return elementoListaOrdenada;
}

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function () {
    const $body = document.querySelector('body');
    $body.appendChild(crearLista());
    $body.appendChild(crearBoton('Calcular el promedio', 'calcular-promedio'));
    $body.appendChild(crearBoton('Obtener el número más pequeño', 'obtener-numero-pequenio'));
    $body.appendChild(crearBoton('Obtener el número más grande', 'obtener-numero-grande'));
    $body.appendChild(crearBoton('Obtener el número que más se repite', 'obtener-numero-frecuente'));
    const elementoP = document.createElement('p');
    elementoP.setAttribute('id', 'texto-resultado');
    const $botonCalcularPromedio = document.querySelector('#calcular-promedio');
    $botonCalcularPromedio.onclick = function() {
        crearRespuesta('El promedio es ... ', 'promedio');
        const numeros = document.querySelectorAll('.lista');
        const promedio = calcularPromedio(numeros);
        document.querySelector('#promedio').textContent = promedio;
        return false;
    }
    const $botonObtenerNumeroPequenio = document.querySelector('#obtener-numero-pequenio');
    $botonObtenerNumeroPequenio.onclick = function() {
        crearRespuesta('El número más pequeño es ... ', 'numero-pequenio');
        const numeros = document.querySelectorAll('.lista');
        const numeroPequenio = obtenerNumeroPequenio(numeros);
        document.querySelector('#numero-pequenio').textContent = numeroPequenio;
        return false;
    }
    const $botonObtenerNumeroGrande = document.querySelector('#obtener-numero-grande');
    $botonObtenerNumeroGrande.onclick = function() {
        crearRespuesta('El número más grande es ... ', 'numero-grande');
        const numeros = document.querySelectorAll('.lista');
        const numeroGrande = obtenerNumeroGrande(numeros);
        document.querySelector('#numero-grande').textContent = numeroGrande;
        return false;
    }
    const $botonObtenerNumeroFrecuente = document.querySelector('#obtener-numero-frecuente');
    $botonObtenerNumeroFrecuente.onclick = function() {
        crearRespuesta('El número más frecuente es ... ', 'numero-frecuente');
        const numeros = document.querySelectorAll('.lista');
        const numeroFrecuente = obtenerNumeroMasRepetido(numeros);
        document.querySelector('#numero-frecuente').textContent = numeroFrecuente;
        return false;
    }
    $body.appendChild(elementoP);
    return false;
}
