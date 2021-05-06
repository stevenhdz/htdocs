let breakfast = ["coffee", "croissant"]
console.log(breakfast)

let iterator = breakfast.entries()

iterator.next().value; // 0 : coffee
iterator.next().value; // 1 : croissant