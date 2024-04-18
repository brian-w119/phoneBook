let bucket = new Array(16);
let index = null;
const person = [];
let totalEntries = 0;
let indexLength = 0;
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#second");
const telephone = document.querySelector("#telephone");
const output = document.querySelector("#display");

//fields,buttons and display for first name search
const search = document.querySelector("find");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const name = document.querySelector("#query");

// converts first name into hash code
function hash(firstName) {
  let code = 0;
  for (let i = 0; i < firstName.length; i++) {
    code += firstName.charCodeAt(i);
  }
  console.log(code % bucket.length);
  index = code % bucket.length;
}

// node that contains contact details
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //sets contact details
  addNode(first, last, number) {
    //
    const position = bucket[index];
    const data = [first, last, number];
    const node = new Node(data);
    indexLength++;
    if (position.head === null) {
      position.head = node;
    } else {
      let current = position.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length = indexLength;
    console.log(`length: ${this.length}`);
  }

  //clear all nodes at specified index in bucket
  clearNodes() {
    const position = bucket[index];
    position.head = null;
    position.next = null;
    this.length = 0;
  }

  //returns size of linked list at index
  indexSize() {
    console.log(this.length);
  }

  clearAllContacts() {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].head !== null) {
        this.clearNodes();
      }
    }
    this.length = 0;
  }
  //
}

//inserts a blank linked list at each index of array on page load
function insertBlanks() {
  const blank = new LinkedList();
  for (let i = 0; i < bucket.length; i++) {
    // console.log(blank);
    bucket[i] = blank;
  }
}

insertBlanks();
hash("hss");
console.log(`index: ${index}`);
console.log(bucket);
let newData = new LinkedList();
newData.addNode("hdrjrrk", "ward", "0988888");
newData.addNode("dsfsgs", "hshjshs", "02555");
newData.addNode("abcgde", "skdkd", "123456");
newData.addNode("durgbdf", "ofunf", "93646");
newData.addNode("durgbdf", "ofunf", "93646");
//newData.clearAllContacts();
newData.indexSize();
newData.clearAllContacts();
newData.indexSize();
//console.log(newData);
//console.log(bucket[index].head);
