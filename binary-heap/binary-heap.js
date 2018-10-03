// Implementation of min heap!

class MinHeap {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.size = 0;
    this.items = new Array(capacity);
  }

  // Methods to get indices
  getLeftChildIndex(parentIndex) { return (parentIndex * 2 + 1); }
  getRightchildIndex(parentIndex) { return (parentIndex * 2 + 2); }
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

  // Boolean check methods
  hasLeftchild(index) { return this.getLeftChildIndex(index) < this.size; }
  hasRightChild(index) { return this.getRightchildIndex(index) < this.size; }
  hasParent(index) { return this.getParentIndex(index) >= 0; }

  // Methods to get data
  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
  rightChild(index) { return this.items[this.getRightchildIndex(index)]; }
  parent(index) { return this.items[this.getParentIndex(index)]; }

  // Now on to the meaty methods! 🥩🥩🥩
  swap(indexOne, indexTwo) {
    let tempData = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = tempData;
  }

  ensureExtraCapacity() {
    if (this.size == this.capacity) {
      this.items.length = this.capacity * 2;
      this.capacity *= 2;
    }
  }

  // This returns the contents of the root node
  // This will be the minimum value if sorting method has been applied
  peek() {
    if (this.size == 0) throw new Error('This heap is empty');

    return this.items[0];
  }

  // This removes the contents of the root node
  // The root node is then assigned to the contents of the bottom right-most node
  poll() {
    if (this.size == 0) throw new Error('This heap is empty');

    let returnItem = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return returnItem;
  }

  add(item) {
    this.ensureExtraCapacity();
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;

    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftchild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightchildIndex(index);
      }
      if (this.items[index] > this.items[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
      } else {
        return;
      }
      index = smallerChildIndex;
    }
  }
}

let heap = new MinHeap();
heap.add(5);
console.log(heap.peek());
heap.add(10);
console.log(heap.peek());
heap.add(1);
console.log(heap.peek());