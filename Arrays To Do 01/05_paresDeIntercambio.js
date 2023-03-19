function paresDeIntercambio(array) {

  for (var i = 0; i < array.length -1; i+=2) {
    temporal = array[i];
    array[i] = array[i+1];
    array[i+1] = temporal;
  }
  console.log("Array resultado = "+array);

}

//Prueba
console.log("Prueba");
var arreglo = [1, 2, 3, 4, 5];
console.log("Array original: "+arreglo);
paresDeIntercambio(arreglo);





