function obtenerCalificacion(letra) {
    let calificacion = parseInt(prompt("Ingrese la calificación del alumno:"));

    if (calificacion >= 90 && calificacion <= 100) {
        letra.textContent = "A";
    } else if (calificacion >= 80 && calificacion <= 89) {
        letra.textContent = "B";
    } else if (calificacion >= 70 && calificacion <= 79) {
        letra.textContent = "C";
    } else if (calificacion >= 60 && calificacion <= 69) {
        letra.textContent = "D";
    } else {
        letra.textContent = "F";
    }
}

// Ejemplo de uso:
let resultado = document.getElementById("resultado");
obtenerCalificacion(resultado);