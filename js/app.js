// ===========================
// Simulador de Compras - Supermercado
// ===========================

// Constantes y variables globales
const DESCUENTO = 0.10; // 10% de descuento si se supera el umbral
const UMBRAL_DESCUENTO = 5000;

let productos = []; // Array de nombres
let precios = [];   // Array de precios numéricos

// ---------------------------
// Función 1: Agregar producto (entrada de datos)
// ---------------------------
function agregarProducto() {
    const nombre = prompt("Ingresá el nombre del producto:");
    const precioStr = prompt("Ingresá el precio del producto (solo números):");
    const precio = parseFloat(precioStr);

    if (!nombre) {
        alert("No ingresaste un nombre. Intenta nuevamente.");
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido. Debe ser un número mayor a 0.");
        return;
    }

    productos.push(nombre);
    precios.push(precio);
    console.log(`Producto agregado -> ${nombre} | $${precio.toFixed(2)}`);
}

// ---------------------------
// Función 2: Calcular total (procesamiento de datos con bucle)
// ---------------------------
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
}

// ---------------------------
// Función 3: Aplicar descuento (condicionales)
// ---------------------------
function aplicarDescuento(total) {
    if (total > UMBRAL_DESCUENTO) {
        const descuento = total * DESCUENTO;
        const totalConDescuento = total - descuento;
        console.log(`Se aplicó un 10% de descuento: -$${descuento.toFixed(2)}`);
        return totalConDescuento;
    }
    console.log("No se aplica descuento.");
    return total;
}

// ---------------------------
// Función 4: Listar productos (salida intermedia por consola)
// ---------------------------
function listarProductos() {
    console.log("---- Resumen de productos ----");
    if (productos.length === 0) {
        console.log("No hay productos cargados.");
        return;
    }
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]} - $${precios[i].toFixed(2)}`);
    }
}

// ---------------------------
// Función 5: Control general del simulador
// (invoca a las funciones anteriores)
// ---------------------------
function iniciarSimulador() {
    alert("Bienvenido/a al Supermercado Virtual.\nVas a poder cargar productos y ver el total con o sin descuento.");
    productos = [];
    precios = [];
    let seguir = true;

    while (seguir) {
        agregarProducto(); // Entrada de datos
        seguir = confirm("¿Querés agregar otro producto?");
    }

    // Procesamiento y salida
    listarProductos();
    const total = calcularTotal();
    const totalFinal = aplicarDescuento(total);

    // Mensajes finales
    console.log("-------------------------------");
    console.log(`Total sin descuento: $${total.toFixed(2)}`);
    console.log(`Total final: $${totalFinal.toFixed(2)}`);

    alert(
        "Resumen de compra:\n" +
        `• Ítems: ${productos.length}\n` +
        `• Total sin descuento: $${total.toFixed(2)}\n` +
        `• Total final: $${totalFinal.toFixed(2)}\n\n` +
        "Mirá la consola para más detalle."
    );
}
