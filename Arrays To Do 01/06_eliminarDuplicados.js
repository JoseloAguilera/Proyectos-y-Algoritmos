function eliminarDuplicados(array) {

  const arrayFinal = [array[0]];
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i-1]){
      j++;
      arrayFinal[j] = array[i];
    }
  }
  console.log("Array resultado = "+arrayFinal);

}

//Prueba
console.log("Prueba");
var arreglo = [1, 2, 2, 3, 4, 4, 5];
console.log("Array original: "+arreglo);
eliminarDuplicados(arreglo);





