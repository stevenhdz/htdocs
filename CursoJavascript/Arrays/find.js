var ages = [3, 10, 18, 20]

function checkAdult(age) {
  return age >= 18;
}

ages.find(checkAdult) // mayores a 18 en adelante el primero que vea 