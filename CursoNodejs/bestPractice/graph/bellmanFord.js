function bellmanFord(graph, startVertex) {
    const distances = {};
    const previous = {};

    // Step 1: Initialize distances and previous vertices
    for (let vertex in graph) {
        distances[vertex] = vertex === startVertex ? 0 : Infinity;
        previous[vertex] = null;
    }

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let vertex in graph) {
            for (let neighbor of graph[vertex]) {
                const distance = distances[vertex] + neighbor.weight;
                if (distance < distances[neighbor.vertex]) {
                    distances[neighbor.vertex] = distance;
                    previous[neighbor.vertex] = vertex;
                }
            }
        }
    }

    // Step 3: Check for negative weight cycles
    for (let vertex in graph) {
        for (let neighbor of graph[vertex]) {
            const distance = distances[vertex] + neighbor.weight;
            if (distance < distances[neighbor.vertex]) {
                console.log("Graph contains negative weight cycle");
                return null;
            }
        }
    }

    return { distances, previous };
}

// Example usage with the given weighted graph
const graph = {
    'A': [{ vertex: 'B', weight: 4 }, { vertex: 'C', weight: 2 }],
    'B': [{ vertex: 'E', weight: -3 }],
    'C': [{ vertex: 'D', weight: 2 }, { vertex: 'F', weight: 4 }],
    'D': [{ vertex: 'E', weight: 3 }],
    'E': [{ vertex: 'F', weight: 1 }],
    'F': []
};

// Example usage
const startVertex = 'A';
const { distances, previous } = bellmanFord(graph, startVertex);

console.log("Bellman-Ford Algorithm Result:");
for (let vertex in distances) {
    console.log(`Shortest distance from ${startVertex} to ${vertex}: ${distances[vertex]}`);
    console.log(`Shortest path from ${startVertex} to ${vertex}: ${getPath(previous, vertex)}`);
}

function getPath(previous, vertex) {
    const path = [];
    while (vertex) {
        path.unshift(vertex);
        vertex = previous[vertex];
    }
    return path.join(' -> ');
}