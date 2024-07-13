//Realizar un programa que muestre los días de la semana de acuerdo a los numero del uno al 7

let dia =3 ;

console.log("------------------------------------------------------------");
console.log("programa utilizando if else ");
//if else
if (dia === 1) {
    console.log("Lunes");
  } else if (dia === 2) {
    console.log("Martes");
  } else if (dia === 3) {
    console.log("Miércoles");
  } else if (dia === 4) {
    console.log("Jueves");
  } else if (dia === 5) {
    console.log("Viernes");
  } else if (dia === 6) {
    console.log("Sábado");
  } else if (dia === 7) {
    console.log("Domingo");
  } else {
    console.log("Número no válido. Por favor, ingrese un número del 1 al 7.");
  }


console.log("------------------------------------------------------------");
console.log("programa utilizando switch ");
// switch
switch (dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Número no válido");
  }