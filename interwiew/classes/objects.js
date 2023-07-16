/* 

  In JavaScript, there are multiple ways to create objects. Here are some commonly used methods:
  1. Object Literal
  2. Constructor Function
  3. Object.create()
  4. ES6 Class Syntax
  5. Factory Function
  6. Object constructor

*/

// 1. Object Literal:
const objectLiteral = { key1: "name", key2: "arjun" };
console.log({ objectLiteral });

// 2. Constructor Function:
function MyObject(key1, key2) {
  this.key1 = key1;
  this.key2 = key2;
}
const constructorFunction = new MyObject("name", "arjun");
console.log({ constructorFunction });

// 3. Object.create():
const create = Object.create({});
create.name = "infinix";
console.log({ create });

// 4. ES6 Class Syntax:
class MyClass {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
}
const classes = new MyClass("name", "arjun");
console.log({ classes });

// 5. Factory Function:
function createObject(key1, key2) {
  return {
    key1,
    key2
  };
}
const factoryFunction = createObject("name", "arjun");
console.log({ factoryFunction });

// 6. Object constructor:
const constructor = new Object();
constructor.key1 = "name";
constructor.key2 = "arjun";
console.log({ constructor });

// in js all functions are objects
function Mobile() {
  return "mobile";
}
const mobileFunction = new Mobile();
mobileFunction.name = "infinix";
console.log({ mobileFunction });
