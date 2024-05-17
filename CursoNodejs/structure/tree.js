class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }
  
    remove(value) {
      this.root = this.removeNode(this.root, value);
    }
  
    removeNode(node, value) {
      if (node === null) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
  
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
  
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
        return node;
      }
    }
  
    findMinNode(node) {
      if (node.left === null) {
        return node;
      } else {
        return this.findMinNode(node.left);
      }
    }
  
    inOrderTraversal() {
      this.inOrderTraversalNode(this.root);
    }
  
    inOrderTraversalNode(node) {
      if (node !== null) {
        this.inOrderTraversalNode(node.left);
        console.log(node.value);
        this.inOrderTraversalNode(node.right);
      }
    }
  
    printTree() {
      this.printNode(this.root, 0);
    }
  
    printNode(node, level) {
      if (node !== null) {
        this.printNode(node.right, level + 1);
        let result = "";
  
        for (let i = 0; i < level; i++) {
          result += "  ";
        }
  
        console.log(result + node.value);
        this.printNode(node.left, level + 1);
      }
    }
  }
  
  // Ejemplo de uso
  const bst = new BinarySearchTree();
  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  bst.insert(14);
  bst.insert(4);
  bst.insert(7);
  bst.insert(13);
  
  console.log("Árbol binario de búsqueda:");
  bst.printTree();
  