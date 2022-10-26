//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularPromedio(numeros) {
    let sumaTotal = 0
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += Number(numeros[i].textContent);
    }
    return sumaTotal / numeros.length;
}
function obtenerNumeroPequeño(numeros) {
    let numeroPequeño = numeros[0].textContent;
    for (let i = 1; i < numeros.length; i++) {
        if (numeroPequeño > numeros[i].textContent){
            numeroPequeño = numeros[i].textContent;
        }
    }
    return numeroPequeño;
}
function obtenerNumeroGrande(numeros) {
    let numeroGrande = numeros[0].textContent;
    for (let i = 1; i < numeros.length; i++) {
        if (numeroGrande < numeros[i].textContent){
            numeroGrande = numeros[i].textContent;
        }
    }
    return numeroGrande;
}
function obtenerNumeroMasRepetido(numeros) {
    let numeroMasRepetido;
    let cantidadRepetido = 0;
    for (let i = 0; i < numeros.length; i++){
        let repetido = 0;
        for (let j = i + 1; j < numeros.length; j++){
            if (numeros[i].textContent === numeros[j].textContent) {
                repetido++;
            }
        }
        if (cantidadRepetido < repetido) {
            numeroMasRepetido = numeros[i].textContent;
            cantidadRepetido = repetido;
        }

    }
    return numeroMasRepetido;
}

let numeros = document.querySelectorAll('.lista');
document.querySelector('#promedio').textContent = calcularPromedio(numeros);
document.querySelector('#numero-pequeño').textContent = obtenerNumeroPequeño(numeros);
document.querySelector('#numero-grande').textContent = obtenerNumeroGrande(numeros);
document.querySelector('#numero-frecuente').textContent = obtenerNumeroMasRepetido(numeros);
