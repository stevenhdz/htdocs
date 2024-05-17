function breadthFirstSearch(graph, startVertex) {
    const visited = {};
    const result = [];
    const queue = [startVertex];

    visited[startVertex] = true;

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        result.push(currentVertex);

        console.log(`Visited vertex: ${currentVertex}, Path: ${result.join(' -> ')}`);

        graph[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }

    return result;
}

// Example usage with the given graph
const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [2, 5, 6],
    5: [3, 4, 6],
    6: [4, 5, 7],
    7: [6]
};

console.log("Breadth-First Search (BFS) Result:", breadthFirstSearch(graph, 1));