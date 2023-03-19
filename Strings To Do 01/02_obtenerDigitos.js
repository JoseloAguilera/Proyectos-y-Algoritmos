function obtenerDigitos(string) {
  let digitos = "";
  for (let i = 0; i < string.length; i++) {
    const letra = string[i];
    if (/\d/.test(letra) ) {
        digitos += letra;
      }
    }
    console.log("Los digitos son: "+digitos);
  }



//Prueba
console.log("Prueba");
let frase = "0s1a3y5w7h9a2t4? 6! 8? 0";
console.log("Frase inicial: "+frase);
obtenerDigitos(frase);



