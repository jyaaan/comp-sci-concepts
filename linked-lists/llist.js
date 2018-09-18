// JavaScript implementation of linked lists

// Linked list class to hold node methods
class LinkedList {
  // Inialize linked list object
  constructor() {
    this.head = null;
  }

  // Adds data to new node at end of list
  // If list is empty, create new node and as head
  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    } 

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
  }

  // Adds data as new node at head of list
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  // Displays all data starting with the head
  display() {
    if (this.head == null) return;
    let currentNode = this.head;
    do {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    } while (currentNode != null);
  }
}

// Node class
class Node {
  // Initialize node object with data
  // Next pointer will be set to null
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


// Tests
var linkedList = new LinkedList();
linkedList.append('John');
linkedList.append('!');
linkedList.prepend('Hello');
linkedList.display();