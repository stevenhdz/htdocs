class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const miPila = new Pila();
miPila.push(1);
miPila.push(2);
miPila.push(3);

console.log(miPila.peek());  // Imprimirá 3
console.log(miPila.pop());    // Imprimirá y removerá 3