var ages = [32, 33, 16, 40]

function checkAdult(age) {
    return age >= 18;
  }

  ages.filter(checkAdult) // [32, 33, 40] quienes son mayores

