class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null
  }

  add_last(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next !== null) { current = current.next; }

    current.next = newNode;
  }

  add_first(value) {
    const newNode = new ListNode(value);
    const next = this.head;

    this.head = newNode;
    newNode.next = next;
  }

  remove_first() {
    throw new Error('Not yet implemented');
  }

  delete(value) {
    throw new Error('Not yet implemented');
  }

  first() {
    throw new Error('Not yet implemented');
  }

  last() {
    throw new Error('Not yet implemented');
  }

  isEmpty() {
    throw new Error('Not yet implemented');
  }

  length() {
    throw new Error('Not yet implemented');
  }

  toString() {
    throw new Error('Not yet implemented');
  }
};

module.exports = LinkedList;
