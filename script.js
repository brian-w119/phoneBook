const contacts = {
   firstName: document.querySelector("#first"),
   lastName: document.querySelector("#second"),
   telephone: document.querySelector("#number"),
   enter: document.querySelector("#enter"),
   bucketSize: null,
   details: [],
   input: [],
   key: null,
   inderx: null,

   bucketCreate(size) {
      this.bucketSize = size;
      const bucket = new Array(size);
      console.log(bucket);
   },

   hash(first) {
      // index = null;
      let code = 0;
      for (let i = 0; i < first.length; i++) {
         code += first.charCodeAt(i);
      }
      //console.log(code % this.bucketSize);
      return code % this.bucketSize;
   },

   capture() {
      enter.addEventListener("click", () => {
         this.details = [];
         this.details.push(
            this.firstName.value,
            this.lastName.value,
            this.telephone.value
         );
         console.log(this.details);
      });
   },

   generateKey() {
      this.key = null;
      this.enter.addEventListener("click", () => {
         this.key = this.details[0];
         console.log(`key = ${this.key}`);
      });
   },

   generateIndex() {
      this.enter.addEventListener("click", () => {
         this.index = this.hash(this.key);
         console.log(`index = ${this.index}`);
      });
   },

   init() {
      this.bucketCreate(16);
      this.capture();
      this.generateKey();
      this.generateIndex();
   },
};

contacts.init();
