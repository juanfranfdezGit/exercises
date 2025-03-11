function largestOfFour(arr) {
    const results = [];

    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];

      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }

      results[i] = largestNumber;
    }
  
    return results;
}

// recorremos varios array con el primer bucle, con el segundo bucle recorremos cada uno de los array
// y comparamos su contenido con el numero mas largo de modo que cuando encontremos un numero mayor al actual
// se sustituira. El numero mas largo obtenido en el segundo bucle ira pasando al array final formando un 
// array con los mayores numeros de los array.