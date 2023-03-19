function insertarEn(array, indice, valor) {

  for (var i = array.length; i >= indice; i--) {
    array[i] = array[i - 1];
  }
  array[indice] = valor;
  console.log("Array resultado= "+array);

}

//Prueba
console.log("Prueba");
var arreglo = [1, 2, 3, 4, 5];
console.log("Array original: "+arreglo);
insertarEn(arreglo, 2, 25);





