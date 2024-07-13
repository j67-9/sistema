/*Realizar un programa que calcule el precio final con descuentos 
y agregre impuestos 0-599 no aplica, 600-999 5% descuento 1000-1999 
10% descuento 2000 en adelante 15% mas el iva(16%)*/

let precio = 500; // solo cambia esta
let descuento = 0;
let precioFinal = 0;

console.log("------------------------------------------------------------");
console.log("programa utilizando if else ");
//if else
if (precio >= 600 && precio <= 999) {
    descuento = 0.05;
    console.log("Tu descuento es del: " + (descuento * 100) + " %");
} else if (precio >= 1000 && precio <= 1999) {
    descuento = 0.10;
    console.log("Tu descuento es del: " + (descuento * 100) + " %");
} else if (precio >= 2000) {
    descuento = 0.15;
    console.log("Tu descuento es del: " + (descuento * 100) + " %");
} else {
    console.log("No tienes descuento");
}

precioFinal = precio * (1 - descuento) * 1.16;
console.log("El precio final con descuento más impuestos es de: " + precioFinal + " MXN");

console.log("------------------------------------------------------------");
console.log("programa utilizando switch ");
//switch
switch (true) {
    case (precio >= 600 && precio <= 999):
        descuento = 0.05;
        console.log("Tu descuento es del: " + (descuento * 100 ) + " %")
        break;
    case (precio >= 1000 && precio <= 1999):
        descuento = 0.10;
        console.log("Tu descuento es del: " + (descuento * 100 ) + " %")
        break;
    case (precio >= 2000):
        descuento = 0.15;
        console.log("Tu descuento es del: " + (descuento * 100 ) + " %")
        break;

        default:
        descuento < 600;
        console.log("No tienes descuento")
        break;
    }

precioFinal = precio * (1 - descuento) * 1.16;
console.log("El precio final con descuento mas impuestos es de: " + precioFinal + " MXN");
