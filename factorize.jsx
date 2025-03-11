function factorialize(num) {
    // comprobamos que num no sea 0
    if(num === 0) {
        return 1;
    } else {
        // si no es 0 pasamos a refactorizar, para ello creamos un array donde incluiremos
        // todos los numeros desde el 1 hasta el introducido, luego con reduce los multuplicamos unos con otros 
        // y devolvemos el resultado
        let arr = []

        for(let i = 1 ; i <= num ; i++) {
            arr.push(i);
        }

        num = arr.reduce((acc, current) => acc * current)

        return num;
   }
 }
 
 factorialize(5);