const modulePathMap = {
  stack: "./Stack/Stack.js",
  arrayStack: "./Stack/ArrayStack.js",
  linkedListStack: "./Stack/LinkedListStack.js",
  queue: "./Queue/Queue.js",
  arrayQueue: "./Queue/ArrayQueue.js",
  linkedListQueue: "./Queue/LinkedListQueue.js",
  linkedList: "./LinkedList/LinkedList.js",
  doublyLinkedList: "./DoublyLinkedList/DoublyLinkedList.js"
};

// function sayhi() {
//   alert("Hi!");
// }

document.getElementById("container").addEventListener("click", (e) => {
  const modulePath = modulePathMap[e.target.dataset["id"]];
  import(modulePath).then((module) => module.default());
});
