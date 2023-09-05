class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  valueOf() {
    return this.data;
  }

  toString() {
    return this.data;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);

    if (this.size > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  prepend(data) {
    const node = new Node(data);

    if (this.size > 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  insertAt(pos, data) {
    if (this.size === 0) {
      throw new Error("List is empty!");
    }

    if (pos < 1 || pos > this.size + 1) {
      throw new Error("Invalid position!");
    }

    if (pos === 1) {
      return this.prepend(data);
    }

    if (pos === this.size + 1) {
      return this.append(data);
    }

    const node = new Node(data);
    let current = this.head;
    let prev;
    let i = 1;

    while (i++ < pos) {
      prev = current;
      current = current.next;
    }

    prev.next = node;
    node.next = current;
    node.prev = prev;
    current.prev = node;
    this.size++;
  }

  removeFirst() {
    if (this.size === 0) return;

    const tmp = this.head;
    this.head = tmp.next;
    this.head.prev = null;
    tmp.next = null;
    this.size -= 1;
  }

  removeLast() {
    if (this.size === 0) return;

    const tmp = this.tail;
    this.tail = tmp.prev;
    this.tail.next = null;
    tmp.prev = null;
    this.size--;
  }

  removeAt(pos) {
    if (this.size === 0) {
      throw new Error("List is empty!");
    }

    if (pos < 1 || pos > this.size) {
      throw new Error("Invalid position!");
    }

    if (pos === 1) {
      return this.removeFirst();
    }

    if (pos === this.size) {
      return this.removeLast();
    }

    let current = this.head;
    let prev;
    let i = 1;

    while (i++ !== pos) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    current.next = null;
    current.prev = null;
    this.size--;
  }

  toString() {
    if (this.size === 0) {
      console.log("List is empty.");
      return;
    }

    let current = this.head;
    const list = [];

    while (current !== null) {
      list.push(current.data);
      current = current.next;
    }
    console.log(`list=[${list}]`);
    console.log(`heead=${this.head.data}, tail=${this.tail.data}`);
  }
}

export default function main() {
  document.getElementById("title").textContent = "Doubly Linked List";

  const list = new DoublyLinkedList();
  list.append(2);
  list.append(1);
  list.prepend(3);
  list.removeFirst();
  list.removeLast();
  list.insertAt(2, 4);
  list.removeAt(2);
  list.toString();
}
