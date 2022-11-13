function probarValidarNumeros() {
    console.assert(validarNumeros([]) === 'Debe ingresar números en la lista antes de pulsar un botón',
    'Validar Números no validó que la lista de números no estuviera vacia',
    );
}

probarValidarNumeros();
