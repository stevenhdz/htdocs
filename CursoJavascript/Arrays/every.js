var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
  }

ages.every(checkAdult) // valida todos si sin mayores.