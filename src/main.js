import './style.css';
// =========================================================================
// DEFINICIONES DE CLASES
// =========================================================================
// EJERCICIO 1: Clase CabeceraPagina
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        Object.defineProperty(this, "titulo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fuente", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "posicionTitulo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.posicionTitulo = 'centrado'; // Valor por defecto
    }
    obtenerPropiedadesIniciales(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        return `Propiedades actualizadas.`;
    }
    setPosicionTitulo(posicion) {
        this.posicionTitulo = posicion;
        return `El título aparecerá: ${this.posicionTitulo}`;
    }
    getPropiedades() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
            posicion: this.posicionTitulo
        };
    }
}
// EJERCICIO 2: Clase Calculadora
class Calculadora {
    constructor() { }
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0) {
            return "Error: No se puede calcular el factorial de un número negativo.";
        }
        if (n === 0) {
            return 1;
        }
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
// EJERCICIO 3: Clase Canción
class Cancion {
    constructor(titulo, genero) {
        Object.defineProperty(this, "titulo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "genero", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "autor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "Desconocido"; // Valor inicial por defecto
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
        return `Autor actualizado a: ${this.autor}`;
    }
    getDatosCancion() {
        return {
            titulo: this.titulo,
            genero: this.genero,
            autor: this.autor
        };
    }
}
// EJERCICIO 4: Clase Cuenta
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        Object.defineProperty(this, "nombre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cantidad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tipoCuenta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "numeroCuenta", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    depositar(valor) {
        if (valor < 5.00) {
            return "El valor a depositar debe ser mayor a $5.00.";
        }
        else {
            this.cantidad += valor;
            return `Se ha depositado correctamente: $${valor.toFixed(2)}. Cantidad actual: $${this.cantidad.toFixed(2)}`;
        }
    }
    retirar(valor) {
        if (valor > this.cantidad) {
            return "No hay suficiente efectivo en la cuenta para retirar esa cantidad.";
        }
        else if (valor < 5.00) {
            return "El valor a retirar debe ser mayor a $5.00.";
        }
        else {
            this.cantidad -= valor;
            return `Ha retirado: $${valor.toFixed(2)}. Cantidad restante en su cuenta: $${this.cantidad.toFixed(2)}`;
        }
    }
    getDatosCuenta() {
        return {
            nombre: this.nombre,
            tipoCuenta: this.tipoCuenta,
            numeroCuenta: this.numeroCuenta,
            cantidad: this.cantidad
        };
    }
}
// EJERCICIO 5: Clase abstracta Persona y clase Empleado
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        Object.defineProperty(this, "nombre", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "apellido", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "direccion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "telefono", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "edad", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} ${this.apellido} es mayor de edad.`;
        }
        else {
            return `${this.nombre} ${this.apellido} no es mayor de edad.`;
        }
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        Object.defineProperty(this, "sueldo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sueldo = sueldo;
    }
    cargarSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo;
        return `Sueldo de ${this.nombre} ${this.apellido} actualizado a: $${this.sueldo.toFixed(2)}`;
    }
    imprimirSueldo() {
        return `El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo.toFixed(2)}`;
    }
    mostrarDatosPersonales() {
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            direccion: this.direccion,
            telefono: this.telefono,
            edad: this.edad,
            sueldo: this.sueldo
        };
    }
}
// =========================================================================
// LÓGICA DE INTERACCIÓN DEL DOM
// =========================================================================
/**
 * Función auxiliar para mostrar mensajes en la UI.
 * @param elementId ID del elemento <p> donde mostrar el mensaje.
 * @param message El texto del mensaje.
 * @param isError Si es true, el texto será rojo; si es false (o omitido), verde.
 */
const displayMessage = (elementId, message, isError = false) => {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.color = isError ? '#ff6b6b' : '#97ce4c';
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.style.color = '';
        }, 5000);
    }
};
// --- EJERCICIO 1: CABECERA DE PÁGINA ---
let miCabecera;
const initCabeceraPage = () => {
    const tituloSpan = document.getElementById('cabecera-titulo');
    const colorSpan = document.getElementById('cabecera-color');
    const fuenteSpan = document.getElementById('cabecera-fuente');
    const posicionSpan = document.getElementById('cabecera-posicion');
    const inputTitulo = document.getElementById('cabecera-input-titulo');
    const inputColor = document.getElementById('cabecera-input-color');
    const inputFuente = document.getElementById('cabecera-input-fuente');
    const btnActualizar = document.getElementById('cabecera-actualizar-btn');
    const selectPosicion = document.getElementById('cabecera-posicion-select');
    const btnSetPosicion = document.getElementById('cabecera-set-posicion-btn');
    miCabecera = new CabeceraPagina("Mi Sitio Web", "Azul", "Arial");
    const updateCabeceraUI = (message = '', isError = false) => {
        const datos = miCabecera.getPropiedades();
        tituloSpan.textContent = datos.titulo;
        colorSpan.textContent = datos.color;
        fuenteSpan.textContent = datos.fuente;
        posicionSpan.textContent = datos.posicion;
        displayMessage('cabecera-message', message, isError);
    };
    btnActualizar.addEventListener('click', () => {
        const nuevoTitulo = inputTitulo.value || miCabecera.getPropiedades().titulo;
        const nuevoColor = inputColor.value || miCabecera.getPropiedades().color;
        const nuevaFuente = inputFuente.value || miCabecera.getPropiedades().fuente;
        const message = miCabecera.obtenerPropiedadesIniciales(nuevoTitulo, nuevoColor, nuevaFuente);
        updateCabeceraUI(message);
        inputTitulo.value = '';
        inputColor.value = '';
        inputFuente.value = '';
    });
    btnSetPosicion.addEventListener('click', () => {
        const posicion = selectPosicion.value;
        const message = miCabecera.setPosicionTitulo(posicion);
        updateCabeceraUI(message);
    });
    updateCabeceraUI("Cabecera inicializada.");
};
// --- EJERCICIO 2: CALCULADORA ---
let miCalculadora;
const initCalculadora = () => {
    const inputNum1 = document.getElementById('calc-num1');
    const selectOperation = document.getElementById('calc-operation');
    const inputNum2 = document.getElementById('calc-num2');
    const btnCalcular = document.getElementById('calc-calcular-btn');
    const resultadoSpan = document.getElementById('calc-resultado');
    miCalculadora = new Calculadora();
    btnCalcular.addEventListener('click', () => {
        const num1 = parseFloat(inputNum1.value);
        const num2 = parseFloat(inputNum2.value);
        const operation = selectOperation.value;
        let result;
        let isError = false;
        if (operation !== 'factorial' && (isNaN(num1) || isNaN(num2))) {
            displayMessage('calc-message', 'Por favor, ingresa números válidos para la operación.', true);
            resultadoSpan.textContent = '';
            return;
        }
        if (operation === 'factorial' && isNaN(num1)) {
            displayMessage('calc-message', 'Por favor, ingresa un número válido para el factorial.', true);
            resultadoSpan.textContent = '';
            return;
        }
        switch (operation) {
            case 'sumar':
                result = miCalculadora.sumar(num1, num2);
                break;
            case 'restar':
                result = miCalculadora.restar(num1, num2);
                break;
            case 'multiplicar':
                result = miCalculadora.multiplicar(num1, num2);
                break;
            case 'dividir':
                result = miCalculadora.dividir(num1, num2);
                if (typeof result === 'string')
                    isError = true;
                break;
            case 'potencia':
                result = miCalculadora.potencia(num1, num2);
                break;
            case 'factorial':
                result = miCalculadora.factorial(num1);
                if (typeof result === 'string')
                    isError = true;
                break;
            default:
                result = "Operación no reconocida.";
                isError = true;
        }
        if (isError) {
            resultadoSpan.textContent = '';
            displayMessage('calc-message', result, true);
        }
        else {
            resultadoSpan.textContent = String(result);
            displayMessage('calc-message', 'Operación realizada con éxito.');
        }
    });
    inputNum1.addEventListener('input', () => displayMessage('calc-message', ''));
    inputNum2.addEventListener('input', () => displayMessage('calc-message', ''));
    selectOperation.addEventListener('change', () => displayMessage('calc-message', ''));
};
// --- EJERCICIO 3: CANCIÓN ---
let miCancion = null;
const initCancion = () => {
    const tituloSpan = document.getElementById('cancion-titulo');
    const generoSpan = document.getElementById('cancion-genero');
    const autorSpan = document.getElementById('cancion-autor');
    const inputTitulo = document.getElementById('cancion-input-titulo');
    const inputGenero = document.getElementById('cancion-input-genero');
    const btnCrear = document.getElementById('cancion-crear-btn');
    const inputAutor = document.getElementById('cancion-input-autor');
    const btnSetAutor = document.getElementById('cancion-set-autor-btn');
    const updateCancionUI = (message = '', isError = false) => {
        if (miCancion) {
            const datos = miCancion.getDatosCancion();
            tituloSpan.textContent = datos.titulo;
            generoSpan.textContent = datos.genero;
            autorSpan.textContent = datos.autor;
        }
        else {
            tituloSpan.textContent = 'N/A';
            generoSpan.textContent = 'N/A';
            autorSpan.textContent = 'N/A';
        }
        displayMessage('cancion-message', message, isError);
    };
    btnCrear.addEventListener('click', () => {
        const titulo = inputTitulo.value.trim();
        const genero = inputGenero.value.trim();
        if (!titulo || !genero) {
            updateCancionUI('Por favor, ingresa un título y género para crear la canción.', true);
            return;
        }
        miCancion = new Cancion(titulo, genero);
        updateCancionUI('Canción creada con éxito.');
        inputTitulo.value = '';
        inputGenero.value = '';
    });
    btnSetAutor.addEventListener('click', () => {
        if (!miCancion) {
            updateCancionUI('Primero crea una canción para establecer el autor.', true);
            return;
        }
        const nuevoAutor = inputAutor.value.trim();
        if (!nuevoAutor) {
            updateCancionUI('Por favor, ingresa un nombre para el autor.', true);
            return;
        }
        const message = miCancion.setAutor(nuevoAutor);
        updateCancionUI(message);
        inputAutor.value = '';
    });
    updateCancionUI('Esperando creación de canción...');
};
// --- EJERCICIO 4: CUENTA ---
let miCuenta;
const initCuenta = () => {
    const nombreSpan = document.getElementById('cuenta-nombre');
    const tipoSpan = document.getElementById('cuenta-tipo');
    const numeroSpan = document.getElementById('cuenta-numero');
    const saldoSpan = document.getElementById('cuenta-saldo');
    const inputDeposit = document.getElementById('deposit-amount');
    const btnDeposit = document.getElementById('deposit-button');
    const inputWithdraw = document.getElementById('withdraw-amount');
    const btnWithdraw = document.getElementById('withdraw-button');
    miCuenta = new Cuenta("Ingrid G.", 100.00, "Ahorro", "123456789");
    const updateCuentaUI = (message = '', isError = false) => {
        const datos = miCuenta.getDatosCuenta();
        nombreSpan.textContent = datos.nombre;
        tipoSpan.textContent = datos.tipoCuenta;
        numeroSpan.textContent = datos.numeroCuenta;
        saldoSpan.textContent = datos.cantidad.toFixed(2);
        displayMessage('cuenta-message', message, isError);
    };
    btnDeposit.addEventListener('click', () => {
        const amount = parseFloat(inputDeposit.value);
        if (isNaN(amount) || amount <= 0) {
            updateCuentaUI('Por favor, ingresa una cantidad válida para depositar.', true);
            return;
        }
        const result = miCuenta.depositar(amount);
        updateCuentaUI(result, result.includes("Error") || result.includes("mayor a $5.00"));
        inputDeposit.value = '';
    });
    btnWithdraw.addEventListener('click', () => {
        const amount = parseFloat(inputWithdraw.value);
        if (isNaN(amount) || amount <= 0) {
            updateCuentaUI('Por favor, ingresa una cantidad válida para retirar.', true);
            return;
        }
        const result = miCuenta.retirar(amount);
        updateCuentaUI(result, result.includes("No hay suficiente") || result.includes("mayor a $5.00"));
        inputWithdraw.value = '';
    });
    updateCuentaUI('Bienvenido a tu cuenta, Ingrid.');
};
// --- EJERCICIO 5: EMPLEADO ---
let miEmpleado = null;
const initEmpleado = () => {
    const nombreSpan = document.getElementById('empleado-nombre');
    const apellidoSpan = document.getElementById('empleado-apellido');
    const edadSpan = document.getElementById('empleado-edad');
    const direccionSpan = document.getElementById('empleado-direccion');
    const telefonoSpan = document.getElementById('empleado-telefono');
    const sueldoSpan = document.getElementById('empleado-sueldo');
    const inputNombre = document.getElementById('empleado-input-nombre');
    const inputApellido = document.getElementById('empleado-input-apellido');
    const inputEdad = document.getElementById('empleado-input-edad');
    const inputDireccion = document.getElementById('empleado-input-direccion');
    const inputTelefono = document.getElementById('empleado-input-telefono');
    const inputSueldo = document.getElementById('empleado-input-sueldo');
    const btnCrear = document.getElementById('empleado-crear-btn');
    const btnMayorEdad = document.getElementById('empleado-mayor-edad-btn');
    const inputNuevoSueldo = document.getElementById('empleado-input-nuevo-sueldo');
    const btnCargarSueldo = document.getElementById('empleado-cargar-sueldo-btn');
    const updateEmpleadoUI = (message = '', isError = false) => {
        if (miEmpleado) {
            const datos = miEmpleado.mostrarDatosPersonales();
            nombreSpan.textContent = datos.nombre;
            apellidoSpan.textContent = datos.apellido;
            edadSpan.textContent = String(datos.edad);
            direccionSpan.textContent = datos.direccion;
            telefonoSpan.textContent = datos.telefono;
            sueldoSpan.textContent = datos.sueldo.toFixed(2);
        }
        else {
            nombreSpan.textContent = 'N/A';
            apellidoSpan.textContent = 'N/A';
            edadSpan.textContent = 'N/A';
            direccionSpan.textContent = 'N/A';
            telefonoSpan.textContent = 'N/A';
            sueldoSpan.textContent = 'N/A';
        }
        displayMessage('empleado-message', message, isError);
    };
    btnCrear.addEventListener('click', () => {
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();
        const edad = parseInt(inputEdad.value);
        const direccion = inputDireccion.value.trim();
        const telefono = inputTelefono.value.trim();
        const sueldo = parseFloat(inputSueldo.value);
        if (!nombre || !apellido || isNaN(edad) || !direccion || !telefono || isNaN(sueldo)) {
            updateEmpleadoUI('Por favor, completa todos los campos para crear el empleado.', true);
            return;
        }
        miEmpleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
        updateEmpleadoUI('Empleado creado con éxito.');
        inputNombre.value = '';
        inputApellido.value = '';
        inputEdad.value = '';
        inputDireccion.value = '';
        inputTelefono.value = '';
        inputSueldo.value = '';
    });
    btnMayorEdad.addEventListener('click', () => {
        if (!miEmpleado) {
            updateEmpleadoUI('Primero crea un empleado.', true);
            return;
        }
        const message = miEmpleado.esMayorDeEdad();
        updateEmpleadoUI(message);
    });
    btnCargarSueldo.addEventListener('click', () => {
        if (!miEmpleado) {
            updateEmpleadoUI('Primero crea un empleado para cargar el sueldo.', true);
            return;
        }
        const nuevoSueldo = parseFloat(inputNuevoSueldo.value);
        if (isNaN(nuevoSueldo) || nuevoSueldo <= 0) {
            updateEmpleadoUI('Por favor, ingresa un sueldo válido para cargar.', true);
            return;
        }
        const message = miEmpleado.cargarSueldo(nuevoSueldo);
        updateEmpleadoUI(message);
        inputNuevoSueldo.value = '';
    });
    updateEmpleadoUI('Esperando creación de empleado...');
};
// =========================================================================
// INICIALIZACIÓN DE INTERACCIONES AL CARGAR EL DOCUMENTO
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initCabeceraPage();
    initCalculadora();
    initCancion();
    initCuenta();
    initEmpleado();
});
