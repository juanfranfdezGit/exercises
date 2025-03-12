// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
// we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {

    // A traves de slice recogemos las ultimas letras del string, gracias a target.length recogemos las mismas letras que queremos comparar
    // de este modo comparamos lo extraido del string con lo que queremos comprobar.

    console.log(str.slice(str.length - target.length))
    
    return str.slice(str.length - target.length) === target;
      
  }
  
  confirmEnding('Bastian', 'n');