/* 
  > Polymorphism is another important concept in object-oriented programming (OOP) that allows 
  objects of different classes to be treated as objects of a common superclass. In Node.js, 
  you can achieve polymorphism through method overriding. 
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat meows.");
  }
}

// Usage
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

animal.makeSound(); // Output: "Animal makes a sound."
dog.makeSound(); // Output: "Dog barks."
cat.makeSound(); // Output: "Cat meows."
