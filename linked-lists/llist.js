// JavaScript implementation of linked lists

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

    var currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
  }


  // Displays all data starting with the head
  display() {
    if (this.head == null) return;
    var currentNode = this.head;
    do {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    } while (currentNode != null);
  }
}

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
linkedList.append('Hello');
linkedList.append('John');
linkedList.append('!');
linkedList.display();