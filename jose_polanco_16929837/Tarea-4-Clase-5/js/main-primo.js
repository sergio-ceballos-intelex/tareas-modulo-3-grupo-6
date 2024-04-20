const messages = document.getElementById("messages");
const numberUser = Number(prompt("Escribe un numero"));

if(numberUser <= 1){
    const numberUser = Number(prompt("Escribe un numero mayor a 1"));
}

function isPrimo(numberUser) {
    for (var i = 2; i < numberUser; i++) {
      if (numberUser % i === 0) {
        messages.innerHTML = "El numero " + numberUser + " no es primo.";
        return false;
      }
    }
    
    messages.innerHTML = "El numero " + numberUser + " es primo.";
    return numberUser !== 1;
    ;
  }

  console.log(isPrimo(numberUser)); 
