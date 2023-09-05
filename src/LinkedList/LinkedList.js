import Node from "../Node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);

    if (this.size > 0) {
      this.tail.next = node;
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
    this.size++;
  }

  removeFirst() {
    if (this.size === 0) return;

    const tmp = this.head;
    this.head = tmp.next;
    tmp.next = null;
    this.size -= 1;
  }

  removeLast() {
    if (this.size === 0) return;

    let current = this.head;
    let prev;

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
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
  document.getElementById("title").textContent = "Linked List";

  const list = new LinkedList();
  list.append(2);
  list.append(1);
  list.prepend(3);
  list.removeFirst();
  list.removeLast();
  list.insertAt(2, 4);
  list.toString();
}
