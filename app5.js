let frase = prompt("Ingresa una frase:");

let palabraAReemplazar = prompt("Ingresa la palabra que deseas reemplazar:");

let nuevaPalabra = prompt("Ingresa la nueva palabra:");

let nuevaFrase = frase.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra);

alert("Frase modificada: " + nuevaFrase);