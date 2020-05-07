class node {
  constructor(data, nextnode) {
    this.data = data;
    this.nextnode = nextnode || null;
  }
}

class singlelinkedlist {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    if (!this.head) return true;
    else return false;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let curnode = this.head;
    while (curnode.nextnode) {
      console.log(curnode.data);
      curnode = curnode.nextnode;
    }
    console.log(curnode.data);
  }
  getTailNode() {
    if (this.isEmpty()) return this.head;
    let curnode = this.head;
    while (curnode.nextnode) {
      curnode = curnode.nextnode;
    }
    return curnode;
  }
  firstInsert(value) {
    this.head = new node(value);
  }
  insertLast(value) {
    if (this.isEmpty()) this.firstInsert(value);
    else {
      let tailNode = this.getTailNode();
      let freshNode = new node(value);
      tailNode.nextnode = freshNode;
    }
  }
  insertFirst(value) {
    if (this.isEmpty()) this.firstInsert(value);
    else {
      let currenthead = this.head;
      let newnode = new node(value);
      this.head = newnode;
      newnode.nextnode = currenthead;
    }
  }

  deleteFirst() {
    let delVal = null;
    if (this.isEmpty()) console.log("cant delete value as the list is empty");
    else {
      let secondNode = this.head.nextnode;
      delVal = this.head.data;
      this.head = secondNode;
    }
    return delVal;
  }
  delLast() {
    let delVal = null;
    if (this.isEmpty()) console.log("cant delete value as the list is empty");
    else {
      //list has only one value that is head in that case rmake the list null
      if (!this.head.nextnode) {
        delVal = this.head.data;
        this.head = null;
      } else {
        let previousNode = this.head;
        let curNode = previousNode.nextnode;
        while (curNode.nextnode) {
          previousNode = curNode;
          curNode = previousNode.nextnode;
        }
        delVal = curNode.data;
        previousNode.nextnode = null;
      }
    }
    return delVal;
  }

  delSpecificValue(data) {
    if (this.isEmpty()) console.log("cant delete value as the list is empty");
    else {
      if (!this.head.nextnode) {
        let compareValue = this.head.data;
        if (compareValue == data) {
          this.head = null;
          console.log(data + " deleted ..");
          return;
        }
      } else {
        let previousNode = this.head;
        let curNode = previousNode.nextnode;
        while (curNode.nextnode && curNode.data!==data) {
          previousNode = curNode;
          curNode = previousNode.nextnode;
        }
        if(curNode.data==data){
        previousNode.nextnode = curNode.nextnode;
        console.log(data + " deleted ..");
        return;
        }
      }
      console.log("provided data not found in the list");
    }
  }

  searchValue(data){
    if (this.isEmpty()) console.log("cant search value as the list is empty");
    else{
      let curNode = this.head;
      while(curNode.nextnode){
        if(curNode.data==data)
        {
          console.log("search value found");
          return;
        }
        curNode = curNode.nextnode;
      }
      console.log("search value not found in the list")
    }
  }
}


//test
const mylist = new singlelinkedlist();
mylist.searchValue(10);
mylist.insertFirst(10);
console.log("deleted Value is "+mylist.delLast());

mylist.insertLast(20);
mylist.insertLast(30);
mylist.insertFirst(50);
console.log("deleted Value is " + mylist.deleteFirst());
mylist.delSpecificValue(20);
mylist.searchValue(10);
mylist.printList();
console.log(mylist);
