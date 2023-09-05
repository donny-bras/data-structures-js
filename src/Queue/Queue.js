class Queue {
  constructor(arr = []) {
    this.queue = arr;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  toString() {
    if (this.queue.length === 0) {
      console.log("Queue is empty.");
      return;
    }

    console.log(`queue=[${this.queue}], size=${this.size}`);
  }
}

export default function main() {
  document.getElementById("title").textContent = "Queue";

  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.toString();
}
