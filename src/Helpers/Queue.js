class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      const node = new _Node(data);
  
      if (this.first === null) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
      }
    
      this.last = node;
    }
    
    dequeue() {
      
      if (this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
     
      if (node === this.last) {
        this.last = null;
      }
      return node.value;
    }
  }
  
  const peek = (queue) => {
    if (!queue.first)
      return null;
  
    return queue.first.value;
  };
  
  const displayQ = (queue) => {
    let qArr = [];
    let currNode = queue.first;
  
    while (currNode) {
      qArr.push(currNode.value);
      currNode = currNode.next;
    }
  
    return qArr;
  };
  
  module.exports = { Queue, peek, displayQ };