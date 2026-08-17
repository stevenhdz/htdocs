function depthFirstSearch(graph, startVertex) {
    const visited = {};
    const result = [];

    function dfs(vertex) {
        visited[vertex] = true;
        result.push(vertex);

        console.log(`Visited vertex: ${vertex}, Path: ${result.join(' -> ')}`);

        graph[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        });
    }

    dfs(startVertex);

    return result;
}

const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [2, 5, 6],
    5: [3, 4, 6],
    6: [4, 5, 7],
    7: [6]
};

console.log("Depth-First Search (DFS) Result:", depthFirstSearch(graph, 1))