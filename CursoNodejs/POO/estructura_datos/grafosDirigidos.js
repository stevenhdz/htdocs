class GrafoDirigido {
    constructor(nodos, aristas) {
        this.nodos = nodos;
        this.matrizAdyacencia = Array.from({ length: nodos.length }, () => Array(nodos.length).fill(0));
        this.aristas = {};

        for (const arista of aristas) {
            const sourceIndex = this.nodos.findIndex((nodo) => nodo.id === arista.source);
            const targetIndex = this.nodos.findIndex((nodo) => nodo.id === arista.target);

            if (sourceIndex !== -1 && targetIndex !== -1) {
                this.matrizAdyacencia[sourceIndex][targetIndex] = 1;

                // Almacena la información de la arista
                if (!this.aristas[arista.source]) {
                    this.aristas[arista.source] = [];
                }
                this.aristas[arista.source].push({ target: arista.target, edge: arista });
            } else {
                console.error('Nodo de origen o destino no encontrado.');
            }
        }
    }

    agregarArista(arista) {
        const sourceIndex = this.nodos.findIndex((nodo) => nodo.id === arista.source);
        const targetIndex = this.nodos.findIndex((nodo) => nodo.id === arista.target);

        if (sourceIndex !== -1 && targetIndex !== -1) {
            this.matrizAdyacencia[sourceIndex][targetIndex] = 1;

            // Almacena la información de la arista
            if (!this.aristas[arista.source]) {
                this.aristas[arista.source] = [];
            }
            this.aristas[arista.source].push({ target: arista.target, edge: arista });
        } else {
            console.error('Nodo de origen o destino no encontrado.');
        }
    }

    obtenerMatrizAdyacencia() {
        return this.matrizAdyacencia;
    }

    buscarEnProfundidad(inicio, visitados = new Set(), resultado = []) {
        if (visitados.size === this.nodos.length) {
            return resultado;
        }

        visitados.add(inicio);
        const nodoActual = this.nodos.find((nodo) => nodo.id === inicio);
        resultado.push(nodoActual);

        // Obtén las aristas del nodo actual
        const aristasActuales = this.aristas[inicio] || [];

        // Ordena las aristas según alguna lógica específica, aquí estoy utilizando el orden de llegada
        aristasActuales.sort((a, b) => a.edge.id.localeCompare(b.edge.id));

        for (const aristaActual of aristasActuales) {
            const siguienteNodo = aristaActual.target;

            if (!visitados.has(siguienteNodo)) {
                this.buscarEnProfundidad(siguienteNodo, visitados, resultado);
            }
        }

        return resultado;
    }
}

const aristas = [
    { id: 'reactflow__edge-1b-2a', animated: 'true', markerEnd: 'arrowclosed', source: '1', sourceHandle: 'b', target: '2', targetHandle: 'a' },
    { id: 'reactflow__edge-2b-3a', animated: 'true', markerEnd: 'arrowclosed', source: '2', sourceHandle: 'b', target: '3', targetHandle: 'a' },
    { id: 'reactflow__edge-3b-4a', animated: 'true', markerEnd: 'arrowclosed', source: '3', sourceHandle: 'b', target: '4', targetHandle: 'a' },
    { id: 'reactflow__edge-6b-7a', animated: 'true', markerEnd: 'arrowclosed', source: '6', sourceHandle: 'b', target: '7', targetHandle: 'a' },
    { id: 'reactflow__edge-5b-6a', animated: 'true', markerEnd: 'arrowclosed', source: '5', sourceHandle: 'b', target: '6', targetHandle: 'a' },
    { id: 'reactflow__edge-4b-5a', animated: 'true', markerEnd: 'arrowclosed', source: '4', sourceHandle: 'b', target: '5', targetHandle: 'a' },
    { id: 'reactflow__edge-8b-5a', animated: 'true', markerEnd: 'arrowclosed', source: '8', sourceHandle: 'b', target: '5', targetHandle: 'a' },
    { id: 'reactflow__edge-3b-8a', animated: 'true', markerEnd: 'arrowclosed', source: '3', sourceHandle: 'b', target: '8', targetHandle: 'a' },
];

const nodos = [
    { id: '1', intent: 'saludos', responses: [] },
    { id: '2', intent: 'Ayuda', responses: [] },
    { id: '3', intent: 'Negocio', responses: [] },
    { id: '4', intent: 'Plan Fluver', responses: [] },
    { id: '8', intent: 'Plan Basico', responses: [] },
    { id: '5', intent: 'Afirmacion positiva', responses: [] },
    { id: '6', intent: 'Agenda', responses: [] },
    { id: '7', intent: 'saludos', responses: [] },
];

const miGrafoDirigido = new GrafoDirigido(nodos, aristas);

const intentNameNodoActual = 'Plan Basico';
const nodoActual = nodos.find((nodo) => nodo.intent === intentNameNodoActual)?.id;

if (nodoActual) {
    const resultadoOrden = miGrafoDirigido.buscarEnProfundidad(nodoActual);
    console.log(resultadoOrden);
} else {
    console.error('Nodo de inicio no encontrado.');
}
