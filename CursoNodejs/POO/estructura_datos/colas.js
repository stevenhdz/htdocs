class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const miCola = new Cola();
miCola.enqueue('A');
miCola.enqueue('B');
miCola.enqueue('C');

console.log(miCola.front());  // Imprimirá 'A'
console.log(miCola.dequeue());  // Imprimirá y removerá 'A'
