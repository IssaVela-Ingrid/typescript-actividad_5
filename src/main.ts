import './style.css';

// =========================================================================
// DEFINICIONES DE CLASES
// =========================================================================

// EJERCICIO 1: Clase CabeceraPagina
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private posicionTitulo: 'centrado' | 'derecha' | 'izquierda';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.posicionTitulo = 'centrado'; // Valor por defecto
    }

    public obtenerPropiedadesIniciales(titulo: string, color: string, fuente: string): string {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        return `Propiedades actualizadas.`;
    }

    public setPosicionTitulo(posicion: 'centrado' | 'derecha' | 'izquierda'): string {
        this.posicionTitulo = posicion;
        return `El título aparecerá: ${this.posicionTitulo}`;
    }

    public getPropiedades(): { titulo: string, color: string, fuente: string, posicion: string } {
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
    constructor() {}

    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number | string {
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
    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "Desconocido"; // Valor inicial por defecto
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): string {
        this.autor = autor;
        return `Autor actualizado a: ${this.autor}`;
    }

    public getDatosCancion(): { titulo: string, genero: string, autor: string } {
        return {
            titulo: this.titulo,
            genero: this.genero,
            autor: this.autor
        };
    }
}

// EJERCICIO 4: Clase Cuenta
class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(valor: number): string {
        if (valor < 5.00) {
            return "El valor a depositar debe ser mayor a $5.00.";
        } else {
            this.cantidad += valor;
            return `Se ha depositado correctamente: $${valor.toFixed(2)}. Cantidad actual: $${this.cantidad.toFixed(2)}`;
        }
    }

    public retirar(valor: number): string {
        if (valor > this.cantidad) {
            return "No hay suficiente efectivo en la cuenta para retirar esa cantidad.";
        } else if (valor < 5.00) {
            return "El valor a retirar debe ser mayor a $5.00.";
        } else {
            this.cantidad -= valor;
            return `Ha retirado: $${valor.toFixed(2)}. Cantidad restante en su cuenta: $${this.cantidad.toFixed(2)}`;
        }
    }

    public getDatosCuenta(): { nombre: string; tipoCuenta: string; numeroCuenta: string; cantidad: number } {
        return {
            nombre: this.nombre,
            tipoCuenta: this.tipoCuenta,
            numeroCuenta: this.numeroCuenta,
            cantidad: this.cantidad
        };
    }
}

// EJERCICIO 5: Clase abstracta Persona y clase Empleado
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public esMayorDeEdad(): string {
        if (this.edad >= 18) {
            return `${this.nombre} ${this.apellido} es mayor de edad.`;
        } else {
            return `${this.nombre} ${this.apellido} no es mayor de edad.`;
        }
    }

    public abstract mostrarDatosPersonales(): {
        nombre: string;
        apellido: string;
        direccion: string;
        telefono: string;
        edad: number;
        [key: string]: any; 
    };
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(nuevoSueldo: number): string {
        this.sueldo = nuevoSueldo;
        return `Sueldo de ${this.nombre} ${this.apellido} actualizado a: $${this.sueldo.toFixed(2)}`;
    }

    public imprimirSueldo(): string { 
        return `El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo.toFixed(2)}`;
    }

    public mostrarDatosPersonales(): {
        nombre: string;
        apellido: string;
        direccion: string;
        telefono: string;
        edad: number;
        sueldo: number;
    } {
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
const displayMessage = (elementId: string, message: string, isError: boolean = false) => {
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
let miCabecera: CabeceraPagina;

const initCabeceraPage = () => {
    const tituloSpan = document.getElementById('cabecera-titulo') as HTMLSpanElement;
    const colorSpan = document.getElementById('cabecera-color') as HTMLSpanElement;
    const fuenteSpan = document.getElementById('cabecera-fuente') as HTMLSpanElement;
    const posicionSpan = document.getElementById('cabecera-posicion') as HTMLSpanElement;

    const inputTitulo = document.getElementById('cabecera-input-titulo') as HTMLInputElement;
    const inputColor = document.getElementById('cabecera-input-color') as HTMLInputElement;
    const inputFuente = document.getElementById('cabecera-input-fuente') as HTMLInputElement;
    const btnActualizar = document.getElementById('cabecera-actualizar-btn') as HTMLButtonElement;
    const selectPosicion = document.getElementById('cabecera-posicion-select') as HTMLSelectElement;
    const btnSetPosicion = document.getElementById('cabecera-set-posicion-btn') as HTMLButtonElement;

    miCabecera = new CabeceraPagina("Mi Sitio Web", "Azul", "Arial");

    const updateCabeceraUI = (message: string = '', isError: boolean = false) => {
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
        const posicion = selectPosicion.value as 'centrado' | 'derecha' | 'izquierda';
        const message = miCabecera.setPosicionTitulo(posicion);
        updateCabeceraUI(message);
    });

    updateCabeceraUI("Cabecera inicializada.");
};

// --- EJERCICIO 2: CALCULADORA ---
let miCalculadora: Calculadora;

const initCalculadora = () => {
    const inputNum1 = document.getElementById('calc-num1') as HTMLInputElement;
    const selectOperation = document.getElementById('calc-operation') as HTMLSelectElement;
    const inputNum2 = document.getElementById('calc-num2') as HTMLInputElement;
    const btnCalcular = document.getElementById('calc-calcular-btn') as HTMLButtonElement;
    const resultadoSpan = document.getElementById('calc-resultado') as HTMLSpanElement;

    miCalculadora = new Calculadora();

    btnCalcular.addEventListener('click', () => {
        const num1 = parseFloat(inputNum1.value);
        const num2 = parseFloat(inputNum2.value);
        const operation = selectOperation.value;
        let result: number | string;
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
            case 'sumar': result = miCalculadora.sumar(num1, num2); break;
            case 'restar': result = miCalculadora.restar(num1, num2); break;
            case 'multiplicar': result = miCalculadora.multiplicar(num1, num2); break;
            case 'dividir': 
                result = miCalculadora.dividir(num1, num2); 
                if (typeof result === 'string') isError = true;
                break;
            case 'potencia': result = miCalculadora.potencia(num1, num2); break;
            case 'factorial': 
                result = miCalculadora.factorial(num1); 
                if (typeof result === 'string') isError = true;
                break;
            default: result = "Operación no reconocida."; isError = true;
        }

        if (isError) {
            resultadoSpan.textContent = '';
            displayMessage('calc-message', result as string, true);
        } else {
            resultadoSpan.textContent = String(result);
            displayMessage('calc-message', 'Operación realizada con éxito.');
        }
    });

    inputNum1.addEventListener('input', () => displayMessage('calc-message', ''));
    inputNum2.addEventListener('input', () => displayMessage('calc-message', ''));
    selectOperation.addEventListener('change', () => displayMessage('calc-message', ''));
};

// --- EJERCICIO 3: CANCIÓN ---
let miCancion: Cancion | null = null; 

const initCancion = () => {
    const tituloSpan = document.getElementById('cancion-titulo') as HTMLSpanElement;
    const generoSpan = document.getElementById('cancion-genero') as HTMLSpanElement;
    const autorSpan = document.getElementById('cancion-autor') as HTMLSpanElement;

    const inputTitulo = document.getElementById('cancion-input-titulo') as HTMLInputElement;
    const inputGenero = document.getElementById('cancion-input-genero') as HTMLInputElement;
    const btnCrear = document.getElementById('cancion-crear-btn') as HTMLButtonElement;
    const inputAutor = document.getElementById('cancion-input-autor') as HTMLInputElement;
    const btnSetAutor = document.getElementById('cancion-set-autor-btn') as HTMLButtonElement;

    const updateCancionUI = (message: string = '', isError: boolean = false) => {
        if (miCancion) {
            const datos = miCancion.getDatosCancion();
            tituloSpan.textContent = datos.titulo;
            generoSpan.textContent = datos.genero;
            autorSpan.textContent = datos.autor;
        } else {
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
let miCuenta: Cuenta;

const initCuenta = () => {
    const nombreSpan = document.getElementById('cuenta-nombre') as HTMLSpanElement;
    const tipoSpan = document.getElementById('cuenta-tipo') as HTMLSpanElement;
    const numeroSpan = document.getElementById('cuenta-numero') as HTMLSpanElement;
    const saldoSpan = document.getElementById('cuenta-saldo') as HTMLSpanElement;

    const inputDeposit = document.getElementById('deposit-amount') as HTMLInputElement;
    const btnDeposit = document.getElementById('deposit-button') as HTMLButtonElement;
    const inputWithdraw = document.getElementById('withdraw-amount') as HTMLInputElement;
    const btnWithdraw = document.getElementById('withdraw-button') as HTMLButtonElement;

    miCuenta = new Cuenta("Ingrid G.", 100.00, "Ahorro", "123456789");

    const updateCuentaUI = (message: string = '', isError: boolean = false) => {
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
let miEmpleado: Empleado | null = null; 

const initEmpleado = () => {
    const nombreSpan = document.getElementById('empleado-nombre') as HTMLSpanElement;
    const apellidoSpan = document.getElementById('empleado-apellido') as HTMLSpanElement;
    const edadSpan = document.getElementById('empleado-edad') as HTMLSpanElement;
    const direccionSpan = document.getElementById('empleado-direccion') as HTMLSpanElement;
    const telefonoSpan = document.getElementById('empleado-telefono') as HTMLSpanElement;
    const sueldoSpan = document.getElementById('empleado-sueldo') as HTMLSpanElement;

    const inputNombre = document.getElementById('empleado-input-nombre') as HTMLInputElement;
    const inputApellido = document.getElementById('empleado-input-apellido') as HTMLInputElement;
    const inputEdad = document.getElementById('empleado-input-edad') as HTMLInputElement;
    const inputDireccion = document.getElementById('empleado-input-direccion') as HTMLInputElement;
    const inputTelefono = document.getElementById('empleado-input-telefono') as HTMLInputElement;
    const inputSueldo = document.getElementById('empleado-input-sueldo') as HTMLInputElement;
    const btnCrear = document.getElementById('empleado-crear-btn') as HTMLButtonElement;
    const btnMayorEdad = document.getElementById('empleado-mayor-edad-btn') as HTMLButtonElement;
    const inputNuevoSueldo = document.getElementById('empleado-input-nuevo-sueldo') as HTMLInputElement;
    const btnCargarSueldo = document.getElementById('empleado-cargar-sueldo-btn') as HTMLButtonElement;

    const updateEmpleadoUI = (message: string = '', isError: boolean = false) => {
        if (miEmpleado) {
            const datos = miEmpleado.mostrarDatosPersonales();
            nombreSpan.textContent = datos.nombre;
            apellidoSpan.textContent = datos.apellido;
            edadSpan.textContent = String(datos.edad);
            direccionSpan.textContent = datos.direccion;
            telefonoSpan.textContent = datos.telefono;
            sueldoSpan.textContent = datos.sueldo.toFixed(2);
        } else {
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