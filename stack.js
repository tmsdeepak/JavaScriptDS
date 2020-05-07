class Stack {
  constructor() {
    this.data = {};
    this.size = 0;
  }
  isempty() {
    if (this.size == 0) return true;
    else return false;
  }
  push(pushdata) {
    this.size++;
    this.data[this.size] = pushdata;
  }

  pop() {
    if (this.isempty()) return "the stack is empty";
    let removeddata = this.data[this.size];
    delete this.data[this.size];
    this.size--;
    return removeddata;
  }

  peek() {
    if (this.isempty()) return "the stack is empty";
    return this.data[this.size];
  }
}


//test
const stack = new Stack();
console.log(stack.pop());
console.log(stack.peek());
for (let index = 0; index < 10; index++) {
  stack.push(index);
}
console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
