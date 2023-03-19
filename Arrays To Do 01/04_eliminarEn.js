function eliminarEn(array, indice) {

  arr = array[indice];
  for (var i = indice; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = arr;
  console.log("Elemento eliminado : "+array.pop());
  console.log("Array resultado = "+array);

}

//Prueba
console.log("Prueba");
var arreglo = [1, 2, 3, 4, 5];
console.log("Array original: "+arreglo);
eliminarEn(arreglo, 2);





