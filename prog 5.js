//Realizar un programa que realice operaciones básicas matemáticas según el operador proporcionado 

console.log("------------------------------------------------------------");
console.log("programa utilizando if else ");
//if else
let num1 = 10; 
let num2 = 5;
let operador = '/'; //para ver el funcionamiento solo hace falta cambiar esta variable
let resultado = 0;

if (operador === '+') {
    resultado = num1 + num2;
    console.log("Elegiste suma");
} else if (operador === '-') {
    resultado = num1 - num2;
    console.log("Elegiste resta");
} else if (operador === '*') {
    resultado = num1 * num2;
    console.log("Elegiste multiplicacion");
} else if (operador === '/') {
    console.log("Elegiste divicion");
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Error: No se puede dividir por cero");
    }
} else {
    console.log("Operador no válido");
}

console.log("El resultado de la operación " + num1 + " " + operador + " " + num2 + " es: " + resultado);


console.log("------------------------------------------------------------");
console.log("programa utilizando switch ");
//switch

switch (operador) {
    case '+':
        console.log("Elegiste suma");
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        console.log("Elegiste resta");
        break;
    case '*':
        resultado = num1 * num2;
        console.log("Elegiste multiplicacion");
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log("Elegiste divicion");
        } else {
            cconsole.log("Error: No se puede dividir por cero");
        }
        break;
    default:
        console.log("Operador no válido");
}

console.log("El resultado de la operación " + num1 + " " + operador + " " + num2 + " es: " + resultado);
