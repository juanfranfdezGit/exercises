// Repeat a given string str (first argument) for num times (second argument). Return an empty string if 
// num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    // Declaramos un string vacio al que agregaremos el string que nos den. Tras esto vemos si el numero pasado de repeticiones
    // es positivo, en caso de ser negativo pasamos un string vacio, si es positivo abrimos un bucle en el que segun el numero
    // de repeticiones iremos agregando el string pasado a nuestro string final.

    let strFinal = ""
  
    if(num > 0) {
      for(let i = 0 ; i < num ; i++) {
        strFinal = strFinal+str
      }
    } else {
      return ""
    }
  
    return strFinal;
  }
  
  repeatStringNumTimes('abc', 3);