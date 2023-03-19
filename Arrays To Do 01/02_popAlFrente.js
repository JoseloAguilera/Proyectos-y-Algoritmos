function popAlFrente(array) {
  var arr = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = arr;
  console.log("Primer elemento: "+array.pop());
  console.log("Array resultante: "+array);

}


//Prueba
console.log("Prueba");
var arreglo = [1, 2, 3, 4, 5];
console.log("Array original: "+arreglo);
popAlFrente(arreglo);





