function obtenerPromedio(numeros) {
    let sumaTotal = 0
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return (sumaTotal / numeros.length).toFixed(2);
}

function obtenerNumeroMenor(numeros) {
    let numeroMenor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = numeros[i];
        }
    }
    return numeroMenor;
}

function obtenerNumeroMayor(numeros) {
    let numeroMayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
}

function obtenerNumeroFrecuente(numeros) {
    let numeroMasFrecuente;
    let cantidadRepetido = 0;
    for (let i = 0; i < numeros.length; i++) {
        let repeticion = 0;
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                repeticion++;
            }
        }
        if (cantidadRepetido < repeticion) {
            numeroMasFrecuente = numeros[i];
            cantidadRepetido = repeticion;
        }

    }
    return numeroMasFrecuente;
}
