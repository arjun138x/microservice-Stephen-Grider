/* 

  > there is no much difference between encapsulation and abstraction
  > abstraction = encapsulation + non-encapsulation
  > encapsulation = encapsulation
  
  > Abstraction refers to the concept of hiding unnecessary details and exposing only the essential features 
    or functionality of a module, class, or API to the user. It helps in simplifying the complexity of a system 
    and allows developers to work with high-level, easy-to-understand interfaces.

  > In Node.js, abstraction can be achieved in several ways:

    1. Modularization: Breaking down a large system into smaller, modular components is a form of abstraction. 
      Each module encapsulates a specific set of functionality, exposing only the necessary functions, classes, or variables 
      to the outside world while hiding the internal implementation details.

    2. APIs: When creating libraries or packages in Node.js, developers often define APIs (Application Programming Interfaces) 
      that provide a set of functions and methods for interacting with the underlying functionality. These APIs abstract 
      away the inner workings and expose a simplified interface, making it easier for users to work with the library 
      without worrying about implementation complexities.

    3. Object-Oriented Programming (OOP) Concepts: OOP concepts like encapsulation, inheritance, and polymorphism help in achieving abstraction.
       By encapsulating related data and behavior within classes and objects, you can expose a clean and intuitive interface to the users, 
       abstracting away the internal details.

    4. Asynchronous Programming: In Node.js, the asynchronous nature of JavaScript enables the abstraction of complex, time-consuming tasks. 
      By using callbacks, promises, or async/await syntax, developers can write code that hides the intricacies of handling asynchronous 
      operations, providing a more straightforward and abstracted programming model.

  > The goal of abstraction is to simplify the development process, improve code maintainability, and provide 
    a clear and intuitive interface for users to interact with modules, libraries, or APIs. It allows developers 
    to focus on using functionality without needing to understand the underlying implementation details, 
    promoting code reusability and making it easier to reason about the system as a whole.
*/

// #1. creating abstraction class

class Calculator {
  // Private method - not accessible from outside the class
  #add(a, b) {
    return a + b;
  }

  // Public methods - exposed API
  sum(a, b) {
    return this.#add(a, b);
  }

  difference(a, b) {
    return a - b;
  }
}

// #2. crating/instantiating objects by using class
const calculator = new Calculator();
const result1 = calculator.sum(5, 3);
console.log(result1); // Output: 8

// iqoo.calling();

// #3. getting/setting the properties and action with created object.
const result2 = calculator.difference(10, 4);
console.log(result2); // Output: 6
