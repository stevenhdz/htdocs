





var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
  }

ages.every(checkAdult) // valida todos si sin mayores.








let hodgepodge = [100, "paint", [200, "brush"], false]
console.log(hodgepodge)

let sisters = ["Tia", "Tamera"]
​console.log(sisters[0])


let actors = ["Felicia", "Nathan", "Neil"]
console.log(​actors[actors.length - 1])


let colors = ["red", "yelo", "blue"]
​colors[1] = "yellow"
​colors


["a", "b", "c", 1, 2, 3].length


["tortilla chips"].concat(["salsa", "queso", "guacamole"])


["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"].pop()


["John", "Kate"].push(8)

["a", "b", "c"].reverse()


sisters.forEach(element => {
    console.log(element)
});


sisters.filter((number) => {
	return number;
});


sisters.map(number => {
	return number;
})

sisters.reduce((sister) => {
    return sister;
});

sisters.find(el => el === 'Tia')