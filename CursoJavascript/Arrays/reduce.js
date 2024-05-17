var numbers = [175, 50, 25];

function myFunc(total, num) {
    return total - num;
  }

  numbers.reduce(myFunc) // 100 saca total y resta segun la funcion cada valor 




  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(array1.reduce(reducer)); // 10 la suma del array en valor
  console.log(array1.reduce(reducer, 5));



/*   Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src) */