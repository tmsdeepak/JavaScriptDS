class Queue {
  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
  isEmpty() {
    if (this.head == this.tail) return true;
    else return false;
  }

  enqueue(newdata) {
    this.data[this.tail] = newdata;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return "the queue is empty";
    let value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }
}


//test
const queue = new Queue();
console.log(queue.dequeue());
for (let index = 0; index < 10; index++) {
  queue.enqueue(index);
}
console.log(queue);
console.log(queue.dequeue());
console.log(queue);