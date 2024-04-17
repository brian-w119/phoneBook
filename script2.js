const myContacts = {
  //fields and buttons for adding new contacts
  firstName: document.querySelector("#first"),
  lastName: document.querySelector("#second"),
  telephone: document.querySelector("#number"),
  output: document.querySelector("#display"),

  //fields,buttons and display for first name search
  search: document.querySelector("find"),
  clear: document.querySelector("#clear"),
  display: document.querySelector("#display"),
  name: document.querySelector("#query"),

  bucket: new Array(16),
  index: null,

  //converts first name to hash code
  hash(firstName) {
    let code = 0;
    for (let i = 0; i < firstName.length; i++) {
      code += firstName.charCodeAt(i);
    }
    console.log(code % bucket.length);
    index = code % bucket.length;
  },

  node: class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  },

  list: class LinkedList {
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
  },

  insertBlanks() {
    const blank = new linkedList();
    for (let i = 0; i < bucket.length; i++) {
      bucket[i] = blank;
    }
  },

  init() {},
};

myContacts.init();