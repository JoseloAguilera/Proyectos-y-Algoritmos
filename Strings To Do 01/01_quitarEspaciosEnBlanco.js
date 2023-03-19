function quitarEspacios(string) {
  let nuevaFrase = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
        nuevaFrase += string[i];
      }
    }
    console.log("Frase: "+nuevaFrase);
  }


//Prueba
console.log("Prueba");
let frase = "Hola buenas tardes";
console.log("Frase inicial: "+frase);
quitarEspacios(frase);



