class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Crear nodos
const raiz = new Nodo(1);
raiz.izquierda = new Nodo(2);
raiz.derecha = new Nodo(3);

console.log(raiz);