function createBTreeNode(order) {
    return {
        keys: [],
        children: [],
        order: order
    };
}

function isLeaf(node) {
    return node.children.length === 0;
}

function splitChild(parent, index) {
    const order = parent.order;
    const child = parent.children[index];
    const newChild = createBTreeNode(order);

    // Encontrar el índice medio y la clave correspondiente para dividir
    const midIndex = Math.floor(order / 2);
    const midKey = child.keys[midIndex];

    // Mover las claves y los hijos al nuevo nodo
    newChild.keys = child.keys.splice(midIndex + 1);
    newChild.children = child.children.splice(midIndex + 1);

    // Insertar la clave media en el nodo padre
    parent.keys.splice(index, 0, midKey);
    parent.children.splice(index + 1, 0, newChild);
}

function insert(root, key) {
    if (!root) {
        // Si el árbol está vacío, crear un nuevo nodo y agregar la clave
        root = createBTreeNode(order);
        root.keys.push(key);
        return root;
    }

    if (isLeaf(root)) {
        // Si es una hoja, simplemente insertar la clave
        root.keys.push(key);
        // Ordenar las claves para mantener el orden
        root.keys.sort((a, b) => a - b);
        return root;
    }

    // Encontrar la posición adecuada para insertar la clave
    let i = 0;
    while (i < root.keys.length && key > root.keys[i]) {
        i++;
    }

    // Insertar recursivamente en el hijo correspondiente
    root.children[i] = insert(root.children[i], key);

    // Dividir el nodo si excede el orden
    if (root.children[i].keys.length > root.order - 1) {
        splitChild(root, i);
    }

    return root;
}

function printBTree(root) {
    function printNode(node, level) {
        let str = "";
        for (let i = 0; i < node.keys.length; i++) {
            str += node.keys[i] + " ";
        }
        console.log("Level " + level + ": " + str);
        for (let i = 0; i < node.children.length; i++) {
            printNode(node.children[i], level + 1);
        }
    }
    printNode(root, 0);
}

// Ejemplo de uso
const order = 1; // Orden del árbol B
let root = null;
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 5);
root = insert(root, 3);
root = insert(root, 15);
root = insert(root, 17);

console.log("Árbol B:");
printBTree(root);