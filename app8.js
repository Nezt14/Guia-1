let palabra = prompt("Ingresa una palabra:");

// Convierte la palabra a minúsculas para hacer la comparación insensible a mayúsculas
let palabraMinusculas = palabra.toLowerCase();

// Invierte la palabra
let palabraInvertida = palabraMinusculas.split("").reverse().join("");

// Verifica si la palabra original es igual a la palabra invertida
if (palabraMinusculas === palabraInvertida) {
    alert("La palabra '" + palabra + "' es un palíndromo.");
} else {
    alert("La palabra '" + palabra + "' no es un palíndromo.");
}
