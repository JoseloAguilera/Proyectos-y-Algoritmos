function acronimo(string) {
  let acro = "";
  const palabras = string.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    if (palabra.length > 0) {
        acro += palabra[0].toUpperCase();
      }
    }
    console.log("El acronimo es: "+acro);
  }

//Prueba
console.log("Prueba");
let frase = "En vivo desde Nueva York, es sábado por la noche";
console.log("Frase inicial: "+frase);
acronimo(frase);

