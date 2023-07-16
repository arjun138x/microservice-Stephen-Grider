/* 
  > Inheritance is a fundamental concept in object-oriented programming (OOP) that allows classes to inherit properties and methods 
  from other classes. In Node.js, you can implement inheritance using classes and the `extends` keyword.

  > can we extend more than one class?
    > no, in js a class cant extend from multiple classes, which also known as "multiple inheritance"
    > but in typescript it is possible.
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Usage
const dog = new Dog("Buddy");
dog.eat(); // Output: "Buddy is eating."
dog.sleep(); // Output: "Buddy is sleeping."
dog.bark(); // Output: "Buddy is barking."
