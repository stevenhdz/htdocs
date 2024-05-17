class Grafo {
    constructor(numNodos) {
        this.numNodos = numNodos;
        this.matrizAdyacencia = Array.from({ length: numNodos }, () => Array(numNodos).fill(0));
    }

    agregarArista(nodoInicio, nodoFin, peso = 1) {
        this.matrizAdyacencia[nodoInicio][nodoFin] = peso;
        this.matrizAdyacencia[nodoFin][nodoInicio] = peso; // Para grafos no dirigidos
    }

    obtenerMatrizAdyacencia() {
        return this.matrizAdyacencia;
    }
}

const miGrafo = new Grafo(4);
miGrafo.agregarArista(0, 1, 3);
miGrafo.agregarArista(1, 2, 2);
miGrafo.agregarArista(0, 3, 5);

console.log(miGrafo.obtenerMatrizAdyacencia());