let bucket = new Array(16);
let index = null;
const person = [];
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#second");
const telephone = document.querySelector("#telephone");

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

class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //sets contact details
  addName(first, last, number) {
    const position = bucket[index];
    const data = [first, last, number];
    const node = new Node(data);
    if (position.head === null) {
      position.head = node;
    } else if (position.head !== null) {
      let current = position.head;
      current.next = node;
    }
  }
}
//inserts a blank linked list at each index of array on page load
function insertBlanks() {
  const blank = new linkedList();
  for (let i = 0; i < bucket.length; i++) {
    // console.log(blank);
    bucket[i] = blank;
  }
}

insertBlanks();
hash("hss");
console.log(`index: ${index}`);
console.log(bucket);
let newData = new linkedList();
newData.addName("hdrjrrk", "ward", "0988888");
newData.addName("dsfsgs", "hshjshs", "02555");
//console.log(newData);
console.log(bucket[index].head);
