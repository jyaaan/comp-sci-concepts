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

  addAfter(key, data) {
    if (this.head == null) return; // If there is no list, do nothing

    let currentNode = this.head;

    while (currentNode != null && currentNode.data != key) {
      currentNode = currentNode.next;
    }
    
    if (currentNode != null) {
      let tempNode = currentNode.next;
      let newNode = new Node(data);
      
      tempNode.prev = newNode;
      newNode.next = tempNode;
      newNode.prev = currentNode;
      currentNode.next = newNode;
    }
  }

  addBefore() {
    if (this.head == null) return; // If there is no list, do nothing
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
list.addAfter('john', 'yukio');
list.bounce();