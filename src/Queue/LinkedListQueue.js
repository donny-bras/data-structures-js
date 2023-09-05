/* Queue implementation using Linked list */

import Node from "../Node";

class LinkedListQueue {
  constructor(arr = []) {
    this.front = null;
    this.rear = null;
    this.size = 0;

    arr.forEach((data) => this.enqueue(data));
  }

  enqueue(data) {
    const node = new Node(data);

    if (this.size === 0) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }

    const tmp = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    tmp.next = null;
    this.size--;

    return tmp.data;
  }

  toString() {
    if (this.size === 0) {
      console.log("Queue is empty.");
      return;
    }

    let current = this.front;
    const queue = [];

    while (current !== null) {
      queue.push(current.data);
      current = current.next;
    }

    console.log(
      `queue=[${queue}], size=${this.size}, front=${this.front}, rear=${this.rear}`
    );
  }
}

export default function main() {
  document.getElementById("title").textContent = "Linked List Queue";

  const queue = new LinkedListQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.toString();
}
