let palabra = prompt("Ingresa una palabra:");

let palabraMinusculas = palabra.toLowerCase();


let contadorVocales = 0;


for (let i = 0; i < palabraMinusculas.length; i++) {
    if ("aeiou".includes(palabraMinusculas[i])) {
        contadorVocales++;
    }
}

alert("Número de vocales en la palabra '" + palabra + "': " + contadorVocales);