var number = parseInt(prompt("Ingresa un número:"));

if (number > 1) {
  var numberPrimo = true;

  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      numberPrimo = false;
      break;
    }
  }

  if (numberPrimo) {
    console.log(number + " es un número primo.");
  } else {
    console.log(number + " no es un número primo.");
  }
} else {
  console.log("Por favor, ingresa un número mayor que 1.");
}
