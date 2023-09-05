class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  _insert(data, node) {
    if (node === null) {
      this.root = new Node(data);
      this.size++;
    } else if (data > node.data) {
      if (node.rightChild === null) {
        node.rightChild = new Node(data);
        this.size++;
      } else {
        this._insert(data, node.rightChild);
      }
    } else if (data < node.data) {
      if (node.leftChild === null) {
        node.leftChild = new Node(data);
        this.size++;
      } else {
        this._insert(data, node.leftChild);
      }
    }
  }

  _delete(data, node) {
    if (node === null) {
      return null;
    } else if (data > node.data) {
      node.rightChild = this._delete(data, node.rightChild);
    } else if (data < node.data) {
      node.leftChild = this._delete(data, node.leftChild);
    } else {
      if (node.leftChild === null && node.rightChild === null) {
        return null;
      } else if (node.leftChild === null) {
        return node.rightChild;
      } else if (node.rightChild === null) {
        return node.leftChild;
      } else {
        const tempNode = this._findMin(node.rightChild);
        node.data = tempNode.data;
        node.rightChild = this._delete(tempNode.data, node.right); // should assign node.rightChild?
        return node;
      }
    }

    return node;
  }

  _findMin(node) {
    let current = node;

    while (current !== null) {
      current = current.leftChild;
    }

    return current;
  }

  _traverse(node) {
    console.log(arguments);
    if (node === null) {
      return;
    }
    console.log(this._traverse(node.leftChild));
    console.log(node.data);
    console.log(this._traverse(node.rightChild));
  }

  insert(data) {
    this._insert(data, this.root);
  }

  delete(data) {
    return this._delete(data, this.root);
  }

  toString() {
    const arr = [];

    console.log(this.root);
    this._traverse(this.root);
  }
}

export default function main() {
  const bst = new BinarySearchTree();

  bst.insert(1);
  bst.insert(4);
  // bst.insert(2);
  // bst.insert(3);
  // console.log(bst.delete(2));
  console.log("deleted", bst.delete(1));
  // bst.toString();
  console.log(bst);
}

main();
