/* Stack implementation using array */

class Stack {
  constructor(arr = []) {
    this.arr = arr;
    this.top = arr.length - 1;
  }

  get size() {
    return this.arr.length;
  }

  push(data) {
    this.arr[++this.top] = data;
  }

  pop() {
    if (this.top === -1) {
      return undefined;
    }

    const data = this.arr[this.top];
    this.arr = this.arr.slice(0, this.top--);
    return data;
  }

  toString() {
    if (this.arr.length === 0) {
      console.log("Stack is empty.");
      return;
    }

    console.log(`stack=[${this.arr.join(", ")}], size=${this.size}`);
  }
}

export default function main() {
  document.getElementById("title").textContent = "Array Stack";

  const stack = new Stack([10, 7]);
  stack.push(1);
  stack.push(2);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  stack.push(43);
  stack.toString();
}
