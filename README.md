# Data Structures in JavaScript

This repository contains implementations of common data structures in JavaScript.

## Queue

A queue is a First-In-First-Out (FIFO) data structure.

**Methods:**

*   `isEmpty()`: Checks if the queue is empty. Returns `true` if empty, `false` otherwise.
*   `enqueue(newdata)`: Adds `newdata` to the end of the queue.
*   `dequeue()`: Removes and returns the element from the front of the queue. Returns "the queue is empty" if the queue is empty.

**Usage Example:**

```javascript
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
```

## Singly Linked List

A singly linked list is a linear data structure where each element (node) points to the next element in the sequence.

**Methods:**

*   `isEmpty()`: Checks if the list is empty. Returns `true` if empty, `false` otherwise.
*   `printList()`: Prints all elements in the list to the console.
*   `getTailNode()`: Returns the last node in the list.
*   `firstInsert(value)`: Inserts `value` as the first element of an empty list.
*   `insertLast(value)`: Inserts `value` at the end of the list.
*   `insertFirst(value)`: Inserts `value` at the beginning of the list.
*   `deleteFirst()`: Removes and returns the first element of the list. Returns `null` if the list is empty.
*   `delLast()`: Removes and returns the last element of the list. Returns `null` if the list is empty.
*   `delSpecificValue(data)`: Deletes the first occurrence of `data` from the list.
*   `searchValue(data)`: Searches for `data` in the list and prints a message to the console indicating if it's found.

**Usage Example:**

```javascript
const myList = new singlelinkedlist();
myList.insertLast(10);
myList.insertFirst(5);
myList.printList(); // Output: 5, 10
console.log(myList.searchValue(10));
myList.delSpecificValue(10);
myList.printList(); // Output: 5
```

## Stack

A stack is a Last-In-First-Out (LIFO) data structure.

**Methods:**

*   `isempty()`: Checks if the stack is empty. Returns `true` if empty, `false` otherwise. (Note: Consider standardizing to `isEmpty` for consistency).
*   `push(pushdata)`: Adds `pushdata` to the top of the stack.
*   `pop()`: Removes and returns the element from the top of the stack. Returns "the stack is empty" if the stack is empty.
*   `peek()`: Returns the element at the top of the stack without removing it. Returns "the stack is empty" if the stack is empty.

**Usage Example:**

```javascript
const stack = new Stack();
stack.push(100);
stack.push(200);
console.log(stack.peek()); // Output: 200
console.log(stack.pop()); // Output: 200
console.log(stack.isempty()); // Output: false
```
