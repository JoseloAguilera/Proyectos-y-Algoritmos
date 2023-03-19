function quitar(array, longitud) {
    let result = [];
    for (let i = 0; i < array.length; i++){
      if(array[i].length >= longitud){
        result.push(array[i]);
      }
    }
    console.log("El resultado es: "+result);
  }

//Prueba
console.log("Prueba");
let arreglo = ["pera", "manzana", "naranja", "limon", "banana"];
console.log("El arreglo iniciar: "+arreglo);
quitar(arreglo, 5);

