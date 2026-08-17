function prim(graph) {
    const visited = {};
    const minimumSpanningTree = [];
    const startVertex = Object.keys(graph)[0]; // Select the first vertex as starting point

    visited[startVertex] = true;

    while (Object.keys(visited).length < Object.keys(graph).length) {
        let minEdge = { weight: Infinity };

        for (let vertex in visited) {
            for (let neighbor of graph[vertex]) {
                if (!visited[neighbor.vertex] && neighbor.weight < minEdge.weight) {
                    minEdge = { vertex, ...neighbor };
                }
            }
        }

        if (minEdge.weight === Infinity) {
            break; // Graph is not connected
        }

        visited[minEdge.vertex] = true;
        minimumSpanningTree.push({ vertices: [minEdge.vertex, minEdge.vertex], weight: minEdge.weight });
    }

    return minimumSpanningTree;
}

// Example usage with the given weighted graph
const graph = {
    'A': [{ vertex: 'B', weight: 4 }, { vertex: 'C', weight: 2 }],
    'B': [{ vertex: 'E', weight: 3 }],
    'C': [{ vertex: 'D', weight: 2 }, { vertex: 'F', weight: 4 }],
    'D': [{ vertex: 'E', weight: 3 }],
    'E': [{ vertex: 'F', weight: 1 }],
    'F': []
};

// Example usage
const minimumSpanningTree = prim(graph);
console.log("Minimum Spanning Tree (Prim's Algorithm) Result:");
console.log(minimumSpanningTree);