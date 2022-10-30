//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularPromedio(numeros) {
    let sumaTotal = 0
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return (sumaTotal / numeros.length).toFixed(2);
}
function obtenerNumeroPequenio(numeros) {
    let numeroPequenio = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeroPequenio > numeros[i]) {
            numeroPequenio = numeros[i];
        }
    }
    return numeroPequenio;
}
function obtenerNumeroGrande(numeros) {
    let numeroGrande = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeroGrande < numeros[i]) {
            numeroGrande = numeros[i];
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
            if (numeros[i] === numeros[j]) {
                repetido++;
            }
        }
        if (cantidadRepetido < repetido) {
            numeroMasRepetido = numeros[i];
            cantidadRepetido = repetido;
        }

    }
    return numeroMasRepetido;
}
function obtenerNumeros() {
    const listaNumeros = document.querySelectorAll('.lista');
    const numeros = [];
    listaNumeros.forEach(numero => {
        if (Number(numero.value) !== 0) {
            numeros.push(Number(numero.value));
        }
    })
    return numeros;
}

function crearBoton(texto, id){
    const boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.setAttribute('id', id);
    boton.textContent = texto;
    return boton;
}

function crearNodoLista(){
    const elementoLista = document.createElement('li');
    const elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'number');
    elementoInput.className = 'lista';
    elementoLista.appendChild(elementoInput);
    return elementoLista;
}
function crearLista(){
    const $lista = document.querySelector('#lista');
    const label = document.createElement('label');
    label.textContent = 'Ingrese los números';
    $lista.appendChild(label);
    for (let i = 0; i < Number(document.querySelector('#cantidad-numeros-ingresar').value); i++) {
        $lista.appendChild(crearNodoLista());
    }
    return;
}

const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function () {
    crearLista();
    return false;
}
document.querySelector('#botones').appendChild(crearBoton('Calcular el promedio', 'calcular-promedio'));
const $botonCalcularPromedio = document.querySelector('#calcular-promedio');
$botonCalcularPromedio.onclick = function() {
    const numeros = obtenerNumeros();
    document.querySelector('#promedio').textContent = calcularPromedio(numeros);
    return false;
}
document.querySelector('#botones').appendChild(crearBoton('Obtener el número más pequeño', 'obtener-numero-pequenio'));
const $botonObtenerNumeroPequenio = document.querySelector('#obtener-numero-pequenio');
$botonObtenerNumeroPequenio.onclick = function() {
    const numeros = obtenerNumeros();
    document.querySelector('#numero-pequenio').textContent = obtenerNumeroPequenio(numeros);
    return false;
}
document.querySelector('#botones').appendChild(crearBoton('Obtener el número más grande', 'obtener-numero-grande'));
const $botonObtenerNumeroGrande = document.querySelector('#obtener-numero-grande');
$botonObtenerNumeroGrande.onclick = function() {
    const numeros = obtenerNumeros();
    document.querySelector('#numero-grande').textContent = obtenerNumeroGrande(numeros);
    return false;
}
document.querySelector('#botones').appendChild(crearBoton('Obtener el número que más se repite', 'obtener-numero-frecuente'));
const $botonObtenerNumeroFrecuente = document.querySelector('#obtener-numero-frecuente');
$botonObtenerNumeroFrecuente.onclick = function() {
    const numeros = obtenerNumeros();
    document.querySelector('#numero-frecuente').textContent = obtenerNumeroMasRepetido(numeros);
    return false;
}
document.querySelector('body').appendChild(crearBoton('Volver a empezar', 'resetear'));
const $botonResetear = document.querySelector('#resetear');
$botonResetear.onclick = function() {
    document.querySelector('#promedio').textContent = '';
    document.querySelector('#numero-pequenio').textContent = '';
    document.querySelector('#numero-grande').textContent = '';
    document.querySelector('#numero-frecuente').textContent = '';
    const padre = document.querySelector('#lista');
    while (padre.lastChild) {
        padre.removeChild(padre.lastChild);
    }
    return false;
}
