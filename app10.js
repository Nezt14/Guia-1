let frase = prompt("Ingresa una frase:");

let palabras = frase.split(" ");

for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
}

let fraseCapitalizada = palabras.join(" ");

alert("Frase con palabras capitalizadas: " + fraseCapitalizada);