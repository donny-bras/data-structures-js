class Stack {
  constructor(arr = []) {
    this.arr = arr;
  }

  get size() {
    return this.arr.length;
  }

  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
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
  document.getElementById("title").textContent = "Stack";

  const stack = new Stack([10, 7]);
  stack.push(1);
  stack.push(2);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  stack.push(43);
  stack.toString();
}
