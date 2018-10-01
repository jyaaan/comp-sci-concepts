// JavaScript implementation of doubly linked lists
// Note to self: ctrl + alt + n to run within VS Code

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    
    let currentNode = this.head;
    while(currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
    currentNode.next.prev = currentNode;
  }

  prepend(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }

    let newNode = new Node(data);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  addAfter() {

  }

  addBefore() {

  }

  delete() {

  }

  traverse() {
    if (this.head == null) return;

    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  bounce() {
    if (this.head == null) return;

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode != null) {
      console.log(currentNode.data);
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    while (prevNode != null) {
      console.log(prevNode.data);
      prevNode = prevNode.prev;
    }
  }
}

// Node class
class Node {
  // Initialize node object with data
  // Next pointer will be set to null
  // Previous pointer will be set to null
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

var list = new DoublyLinkedList();
list.prepend('hello');
list.append('john');
list.prepend('well');
list.append('yamashiro');
list.bounce();