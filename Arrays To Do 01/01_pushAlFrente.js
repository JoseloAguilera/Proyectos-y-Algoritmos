function pushAlFrente(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
}

//Prueba
console.log("Prueba");
var arreglo = [2, 3, 4, 5];
console.log("Array original: "+arreglo);
var valor = 1;
console.log("Valor a Agregar: "+valor);
result= pushAlFrente(arreglo, valor);
console.log("Resultado: "+result);


