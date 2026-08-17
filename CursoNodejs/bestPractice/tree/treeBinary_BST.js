function TreeNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

function insert(root, value) {
    if (!root) {
        return TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else if (value > root.value) {
        root.right = insert(root.right, value);
    }

    return root;
}

function search(root, value) {
    if (!root || root.value === value) {
        return root;
    }

    if (value < root.value) {
        return search(root.left, value);
    } else {
        return search(root.right, value);
    }
}

function printTree(root) {
    function inOrderTraversal(node) {
        if (node) {
            inOrderTraversal(node.left);
            console.log(node.value);
            inOrderTraversal(node.right);
        }
    }

    console.log("Árbol binario de búsqueda:");
    inOrderTraversal(root);
}


// Ejemplo de uso
let root = null;
root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 15);
root = insert(root, 3);
root = insert(root, 8);
root = insert(root, 12);
root = insert(root, 20);

printTree(root);

console.log(search(root, 12)); // Resultado: { value: 12, left: null, right: null }
console.log(search(root, 7)); // Resultado: null (no encontrado)