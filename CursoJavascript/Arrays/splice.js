var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits) // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"] add segun la posicion indicada 


var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2); // delete ["Apple", "Mango"]


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi"); // delete ["Apple"]  y add ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
