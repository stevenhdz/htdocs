function TreeNode(value) {
    return {
        value: value,
        left: null,
        right: null,
        height: 1
    };
}

function getHeight(node) {
    return node ? node.height : 0;
}

function getBalanceFactor(node) {
    return node ? getHeight(node.left) - getHeight(node.right) : 0;
}

function updateHeight(node) {
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    updateHeight(y);
    updateHeight(x);

    return x;
}

function rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    updateHeight(x);
    updateHeight(y);

    return y;
}

function insert(root, value) {
    if (!root) {
        return TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else if (value > root.value) {
        root.right = insert(root.right, value);
    } else {
        return root; // No se permiten valores duplicados
    }

    updateHeight(root);

    const balanceFactor = getBalanceFactor(root);

    // Rotaciones para mantener el balance del árbol
    if (balanceFactor > 1 && value < root.left.value) {
        return rotateRight(root);
    }
    if (balanceFactor < -1 && value > root.right.value) {
        return rotateLeft(root);
    }
    if (balanceFactor > 1 && value > root.left.value) {
        root.left = rotateLeft(root.left);
        return rotateRight(root);
    }
    if (balanceFactor < -1 && value < root.right.value) {
        root.right = rotateRight(root.right);
        return rotateLeft(root);
    }

    return root;
}

// Función para imprimir el árbol en orden
function printTree(root) {
    function inOrderTraversal(node) {
        if (node) {
            inOrderTraversal(node.left);
            console.log(node.value);
            inOrderTraversal(node.right);
        }
    }

    console.log("Árbol AVL:");
    inOrderTraversal(root);
    console.log("------------------------");
}

// Ejemplo de uso
let root = null;
root = insert(root, 10);
printTree(root);
root = insert(root, 5);
printTree(root);
root = insert(root, 15);
printTree(root);
root = insert(root, 3);
printTree(root);
root = insert(root, 8);
printTree(root);
root = insert(root, 12);
printTree(root);
root = insert(root, 20);
printTree(root);