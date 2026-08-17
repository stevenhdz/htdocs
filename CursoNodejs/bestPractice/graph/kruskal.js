function kruskal(graph) {
    // Step 1: Sort all edges in non-decreasing order of their weight
    const sortedEdges = [];
    for (let vertex in graph) {
        for (let neighbor of graph[vertex]) {
            sortedEdges.push({ vertices: [vertex, neighbor.vertex], weight: neighbor.weight });
        }
    }
    sortedEdges.sort((a, b) => a.weight - b.weight);

    const minimumSpanningTree = [];
    const parent = {};

    function find(x) {
        if (parent[x] === undefined) {
            return x;
        }
        return find(parent[x]);
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        parent[rootX] = rootY;
    }

    // Step 2: Add edges to the minimum spanning tree while avoiding cycles
    for (let edge of sortedEdges) {
        const [vertex1, vertex2] = edge.vertices;
        if (find(vertex1) !== find(vertex2)) {
            union(vertex1, vertex2);
            minimumSpanningTree.push(edge);
        }
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
const minimumSpanningTree = kruskal(graph);
console.log("Minimum Spanning Tree (Kruskal Algorithm) Result:");
console.log(minimumSpanningTree);