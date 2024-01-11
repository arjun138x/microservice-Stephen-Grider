// #1. creating class
class Mobile {
  // we can't pass parameters into the class. by using the constructor we can pass the properties
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }
  calling() {
    console.log("call to ram from " + this.name);
  }
  takePicture() {
    console.log("takePicture");
  }
  setName(name) {
    this.name = name;
  }
}

// #2. crating/instantiating objects by using class
let infinix = new Mobile("black", "infinix note 30");
let iqoo = new Mobile("black", "iqoo z3");

// iqoo.calling();

// #3. getting/setting the properties and action with created object.
console.log(infinix.name);
infinix.calling();
infinix.setName("apple");
console.log(infinix.name);
