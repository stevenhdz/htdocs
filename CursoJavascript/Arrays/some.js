var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

ages.some(checkAdult);
