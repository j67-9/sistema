/*Realizar un programa que calcule el descuento de una compra dependiendo 
de los artículos comprados de 6-10 descuento del 5% 11-20 el 10% arriba de 
20 15% si no alcanza los 5 artículos no aplica descuento*/

let articulos = 6;

console.log("------------------------------------------------------------");
console.log("programa utilizando if else ");
//if else

if (articulos >= 6 && articulos <= 10) {
    console.log("Descuento del 5% aplicado.");
  } else if (articulos >= 11 && articulos <= 20) {
    console.log("Descuento del 10% aplicado.");
  } else if (articulos > 20) {
    console.log("Descuento del 15% aplicado.");
  } else {
    console.log("No se aplica descuento.");
  }


console.log("------------------------------------------------------------");
console.log("programa utilizando switch ");
//switch

switch (true) {
    case (articulos >= 6 && articulos <= 10):
      console.log("Descuento del 5% aplicado.");
      break;
    case (articulos >= 11 && articulos <= 20):
      console.log("Descuento del 10% aplicado.");
      break;
    case (articulos > 20):
      console.log("Descuento del 15% aplicado.");
      break;
    default:
      console.log("No se aplica descuento.");
  }
