let bucket = new Array(16);

// converts first name into hash code
function hash(data) {
  let code = 0;
  for (let i = 0; i < data.length; i++) {
    code += data.charCodeAt(i);
  }
  console.log(code % bucket.length);
  //return code % bucket.length;
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
  addName(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
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

let newData = new linkedList();
newData.addName("John");
console.log(newData);
