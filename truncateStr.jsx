// Truncate a string (first argument) if it is longer than the given maximum string 
// length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {

    // Vemos si el string es mas largo que el numer que queremos quitar, una vez comprobad con slice quitamos el numero de letras final del
    // string que pasen y al le concatenamos 3 puntos suspensivos.

    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  
  truncateString('A-tisket a-tasket A green and yellow basket', 8);