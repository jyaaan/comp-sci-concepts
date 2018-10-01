// JavaScript implementation of linked lists
// Note to self: ctrl + alt + n to run within VS Code


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

  // Adds data after first instance of given key.
  // Nothing is changed if key is not found
  addAfter(key, data) {
    if (this.head == null) return;

    let currentNode = this.head;
    while (currentNode != null && currentNode.data != key) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      let tempNode = currentNode.next;
      currentNode.next = new Node(data);
      currentNode.next.next = tempNode;
      return;
    }
  }

  // Adds data before first instance of given key
  // Again, nothing is changed if key is not found
  addBefore(key, data) {
    if (this.head == null) return;
    
    let currentNode = this.head;
    let prevNode = null;

    while(currentNode != null && currentNode.data != key) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      let tempNode = new Node(data);
      tempNode.next = currentNode;
      if (prevNode) {
        prevNode.next = tempNode;
      } else {
        this.head = tempNode;
      }
      return;
    }
  }

  // Deletes node that matches first instance of given data
  delete(data) {
    if (this.head == null) return;

    let currentNode = this.head;
    let prevNode = null;

    while(currentNode != null && currentNode.data != data) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode != null) {
      if (prevNode) {
        prevNode.next = currentNode.next;
      } else {
        this.head = currentNode.next;
      }
      return;
    }
  }

  // Displays all data starting with the head
  traverse() {
    if (this.head == null) return;

    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
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
linkedList.addAfter('John', 'Yamashiro');
linkedList.addAfter('nono', 'ERROR');
linkedList.addBefore('Yamashiro', 'Yukio');
linkedList.addBefore('Bort', 'ERROR');
linkedList.addBefore('Hello', 'Well');
linkedList.addAfter('John', 'Poop');
linkedList.delete('Poop');
linkedList.traverse();