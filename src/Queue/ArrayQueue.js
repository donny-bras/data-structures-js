/* Queue implementation using array*/

class Queue {
  constructor(arr = []) {
    this.queue = arr;
    this.rear = arr.length - 1;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(data) {
    this.queue[++this.rear] = data;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }

    const data = this.queue[0];
    this.queue = this.queue.slice(1);
    this.rear--;
    return data;
  }

  toString() {
    if (this.queue.length === 0) {
      console.log("Queue is empty.");
      return;
    }

    console.log(`queue=[${this.queue}], size=${this.size}, rear=${this.rear}`);
  }
}

export default function main() {
  document.getElementById("title").textContent = "Array Queue";

  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.toString();
}
