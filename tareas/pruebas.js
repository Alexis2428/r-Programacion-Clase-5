function probarvalidarCantNumeros() {
    console.assert(
        validarCantNumeros('') === 'El campo cantidad-numeros no puede estar vacio',
        'validarCantNumeros no validó que no se ingresó un número'
    );

    console.assert(
        validarCantNumeros('1,2') === 'El campo cantidad-numeros solo acepta números enteros',
        'validarCantNumeros no validó que el número no sea entero'
    );

    console.assert(
        validarCantNumeros('12') === '',
        'validarCantNumeros no funcionó con un valor valido'
    );
}

function probarValidarNumero() {
    console.assert(
        validarNumero('') === 'El campo numero no puede estar vacio',
        'validarNumero no validó que no se ingresó un número'
    );

    console.assert(
        validarNumero('123,456') === '',
        'validarNumero no funcionó con un valor valido'
    );
}

probarvalidarCantNumeros();
probarValidarNumero();
