class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return (this.head == null);
  }

  peek() {
    return this.head.data;
  }

  add(data) {
    var newNode = new Node(data);
    if (this.tail != null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (this.head == null) {
      this.head = newNode;
    }
  }

  remove() {
    if (this.head == null) return;

    let returnNode = this.head;
    this.head = this.head.next;
    return returnNode.data;
  }
}

let newQueue = new Queue();
newQueue.add('hi');
console.log(newQueue.peek());
newQueue.add('ho');
console.log(newQueue.peek());
console.log(newQueue.pop());
console.log(newQueue.pop());
console.log(newQueue.pop());