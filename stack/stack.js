class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return (this.top == null);
  }

  peek() {
    return this.top.data;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let returnNode = this.top;
    this.top = this.top.next;
    return returnNode.data;
  }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push('john');
stack.push('is');
stack.push('name');
stack.push('my');
stack.push('hello');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
