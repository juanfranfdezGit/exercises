// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
    // Creamos un array con el string, luego abrimos un array vacio donde introduciremos el texto capitalizado.
    // Con un bucle recorremos el array pasando solo la primera posicion a mayuscula y el resto gracias a slice a minuscula.
    // tras eso juntamos el array con espacios con un join, devolviendo el string capitalizado

    const newTitle = str.split(" ");
    const updatedTitle = [];

    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }

    return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");