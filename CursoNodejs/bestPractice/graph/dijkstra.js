function dijkstra(graph, startVertex) {
    const distances = {};
    const previous = {};

    for (let vertex in graph) {
        distances[vertex] = vertex === startVertex ? 0 : Infinity;
        previous[vertex] = null;
    }

    const unvisited = Object.keys(graph);

    while (unvisited.length > 0) {
        let currentVertex = unvisited.reduce((minVertex, vertex) => {
            return (distances[vertex] < distances[minVertex]) ? vertex : minVertex;
        }, unvisited[0]);

        unvisited.splice(unvisited.indexOf(currentVertex), 1);

        for (let neighbor of graph[currentVertex]) {
            const distance = distances[currentVertex] + neighbor.weight;
            if (distance < distances[neighbor.vertex]) {
                distances[neighbor.vertex] = distance;
                previous[neighbor.vertex] = currentVertex;
            }
        }
    }

    return { distances, previous };
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
const startVertex = 'A';
const { distances, previous } = dijkstra(graph, startVertex);

console.log("Dijkstra's Algorithm Result:");
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
