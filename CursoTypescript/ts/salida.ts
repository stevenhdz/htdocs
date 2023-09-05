/* variables */
let message: string = "Hola mundo"
console.log(message)

let titulo: string = "Hola"
console.log(titulo)

let loteria: number = 2
console.log(loteria)

let n: null = null;
console.log(n)

let u: undefined = undefined;
console.log(u)

let autorizacion: boolean = true
console.log(autorizacion)

let value: string | number = "Hello";
value = 42;
console.log(value)

let numbers: number[] = [1, 2, 3]
console.log(numbers)

let mixed: (number | boolean | string)[] = [2, true, "hola"];
console.log(mixed)

let mixed2: (number | boolean | string[])[] = [2, true, ["hola"]];
console.log(mixed2)

let players: { [key: number]: string } = {
    10: "Messi",
    7: "ronaldo"
}
console.log(players)

let countries: Record<string, string> = {
    "10": "Messi",
    "7": "ronaldo"
}
console.log(countries)

let countries2: Record<string, string[]> = {
    "10": ["Messi"],
    "7": ["ronaldo"]
}
console.log(countries2)

const pi: number = 3.1416
console.log(pi)

/* intersection types */
type A = { a: number };
type B = { b: string };
type AB = A & B;

let obj: AB = { a: 42, b: "Hello" };
console.log(obj)

/* function types NO ENTENDI */
type MathFunc = (x: number, y: number) => number;
const add: MathFunc = (a, b) => a + b;
console.log('types functions', add)

/* type assertions */
let val: any = "This is a string";
let strLen: number = (val as string).length;
console.log('strlen', strLen)

/* Genrics */
function identity<T>(arg: T): T {
    return arg;
}

let num: number = identity(42);
let str: string = identity("Hello");
console.log('generic', num)

/* operadores */
console.log(1 + 1)
console.log(1 - 1)
console.log(10 * 2)
console.log(10 / 2)

/* operadores comparativos */
console.log(4 == 4)
console.log(4 < 5)
console.log(4 >= 5)

/* operadores logicos */
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


/* condicionales */

if (autorizacion) {
    console.log('puede')
} else if (typeof autorizacion == undefined) {
    console.log('puede pero')
} else {
    console.log('no puede')
}

/* castin */
type options = 'verde' | 'Hola'
switch (<options>titulo) {

    case 'Hola':
        console.log('switch', titulo)
        break;
    /*    case 'hola2':
           console.log('switch', titulo)
           break; */
    default:
        break;
}

/* functions */

function sum(number1: number, number2: number): number {
    return number1 + number2
}

let result = sum(3, 4)
console.log(result)


function mult(number1: number, number2: number): void {
    console.log(number1 * number2)
}

mult(3, 3)

function imprimirPE(list: any[]): void {
    console.log(list[0])
}

let animals: string[] = ['leon', 'leona']
imprimirPE(animals)

/* bucles o loops */
for (let animal of animals) {
    console.log("for:", animal)
}

while (loteria <= 7) {
    console.log("while:", loteria)
    loteria++
}

do {
    console.log("do:", loteria)
} while (loteria < 7);

/* POO */
interface Lang {
    nombre: string;
    año?: number; /* optional */
    descripcion: Function
}

let javascript: Lang = {
    nombre: 'Javascript',
    año: 2023,
    descripcion: function () { console.log(`hola desde interface, ${this.nombre} fue creado en ${this.año}`) }
}

javascript.descripcion()

// Define the Language class that implements Lang
class Language implements Lang {
    nombre: string
    año: number

    constructor(nombre: string, año: number) {
        this.nombre = nombre
        this.año = año
    }
    descripcion() { console.log(`hola desde class, ${this.nombre} fue creado en ${this.año}`) }
}

// Create instances of Language
let html = new Language('html', 2023)
html.descripcion()
let css = new Language('css', 2023)
css.descripcion()

/* enums */
enum Color {
    Red,
    Green,
    Blue,
}

let color: Color = Color.Green;
console.log('enum:', color)

/* exceptions control */
try {
    const jsonData = '{"name": "John", "age": 30}';
    const parsedData = JSON.parse(jsonData);
    const { name, age, email } = parsedData;
    console.log(`Nombre: ${name}, Edad: ${age}, Email: ${email}`);
} catch (error) {
    console.error('Se ha producido un error:', error.message);
} finally {
    console.log('Bloque finally ejecutado.');
}
console.log('El programa continúa después del bloque try...catch.');



/* modules */
function rest(a: number, b: number): void {
    console.log('rest:', a - b)
}

export { rest }
