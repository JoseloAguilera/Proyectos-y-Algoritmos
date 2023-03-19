function contar(string) {
    const result = string.replace(/\s/g, '');
    console.log("La cantidad de palabras es: "+result.length);
  }

//Prueba
console.log("Prueba");
let frase = "Amor, me estás volviendo loca";
console.log("Frase inicial: "+frase);
contar(frase);

