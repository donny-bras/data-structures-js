/* Stack implementation using Linked List */
import Node from "../Node";

class LinkedListStack {
  constructor(arr = []) {
    this.top = null;
    this.size = 0;

    arr.forEach((data) => this.push(data));
  }

  push(data) {
    const node = new Node(data);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    if (this.top === null) {
      return undefined;
    }

    const data = this.top.data;
    const tmp = this.top;
    this.top = this.top.next;
    tmp.next = null;
    this.size--;
    return data;
  }

  toString() {
    if (this.size === 0) {
      console.log("Stack is empty.");
      return;
    }

    const stack = [];
    let current = this.top;

    while (current !== null) {
      stack.push(current.data);
      current = current.next;
    }
    console.log(`stack=[${stack.reverse()}], size=${this.size}`);
  }
}

export default function main() {
  document.getElementById("title").textContent = "Linked List Stack";

  const stack = new LinkedListStack([10, 7]);
  stack.push(1);
  stack.push(2);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  stack.push(43);
  stack.toString();
}
