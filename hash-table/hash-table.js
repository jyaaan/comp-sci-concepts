const defaultHashTableSize = 32;
const LinkedList = require('../linked-lists/llist');

class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce((acc, curr) => {
      return acc + curr.charCodeAt(0);
    }, 0);

    return hash % this.buckets.length;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    this.keys[key] = hashCode;
    const bucketLinkedList = this.buckets[hashCode];
    const node = bucketLinkedList.find(key);

    if (node) {
      node.data.value = value;
    } else {
      bucketLinkedList.append({key: key, value: value});
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const bucketLinkedList = this.buckets[hashCode];
    const node = bucketLinkedList.find(key);

    return node ? node.data.value : undefined;
  }
}

const hashTable = new HashTable();
hashTable.set('john', 'yamashiro1');
console.log(hashTable.get('john'));
console.log(hashTable.get('johno'));