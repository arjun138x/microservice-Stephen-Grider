/* 
  > Encapsulation is a functionality to hide the in single unit along with a functionality to protect information from outside.
  > data of an object should not be directly exposed
  > use var keyword to make data members private
  > use setter methods to set the data and getter methods to get the data

  > Encapsulation/data hiding is a principle of object-oriented programming (OOP) that promotes the bundling of data and methods within a class, 
    and controlling access to that data from outside the class. In JavaScript, encapsulation can be achieved using various techniques:
    1. Private Variables and Methods
    2. Getters and Setters:
    3. WeakMap:

*/

/* 
  1. Private Variables and Methods: JavaScript does not have built-in support for private members in classes, 
    but you can simulate private variables and methods using closures or symbols. By declaring variables and functions 
    within the scope of a constructor or a module, you can limit their visibility and access from outside.
 */
//  Example using closures:
function MyClass() {
  let privateVariable = "private";

  this.publicMethod = function () {
    console.log(privateVariable);
  };
}

const closures = new MyClass();
closures.publicMethod(); // Outputs: "private"
closures.privateVariable; // undefined (cannot access)

/* 
  2.Getters and Setters: JavaScript classes support defining getters and setters for properties. Getters allow you to access a property, 
    and setters allow you to control the assignment of values to properties, enabling you to add validation or perform additional logic.
 */
class GettersAndSetters {
  constructor() {
    this._privateVariable = "private";
  }

  get privateVariable() {
    return this._privateVariable;
  }

  set privateVariable(value) {
    // Additional logic or validation can be added here
    this._privateVariable = value;
  }
}

const gettersAndSetters = new GettersAndSetters();
console.log(gettersAndSetters.privateVariable); // Outputs: "private"
gettersAndSetters.privateVariable = "new value"; // Setter is invoked
console.log(gettersAndSetters.privateVariable); // Outputs: "new value"
/* 
  3.WeakMap: Another technique to achieve encapsulation is using the `WeakMap` data structure to store private data associated with an instance of a class. 
    WeakMaps allow you to associate private data with a specific object instance, making it inaccessible from the outside.
 */
const privateData = new WeakMap();

class WeakMapClass {
  constructor() {
    privateData.set(this, { privateVariable: "private" });
  }

  publicMethod() {
    console.log(privateData.get(this).privateVariable);
  }
}

const weakMapClass = new WeakMapClass();
weakMapClass.publicMethod(); // Outputs: "private"
console.log(privateData.get(weakMapClass).privateVariable); // undefined (cannot access)

// creating encapsulation class
class Bank {
  constructor() {
    // we can't access these variables from outside
    var name = name;
    var account_number = account_number;
    var balance = balance;

    this.getName = () => {
      return name;
    };
    this.getAccountNumber = () => {
      return account_number;
    };
    this.getBalance = () => {
      return balance;
    };
    /* 
    we can hide the methods also
    
    var getBalance = () => {
      return balance;
    };
    
    */
    this.setName = (newName) => {
      name = newName;
    };
    this.setAccountNumber = () => {
      account_number = Math.floor(Math.random() * 9000000000);
    };
  }
}

// crating/instantiating objects by using class
const arjun = new Bank("arjun", null, 100);

// getting/setting the properties and action with created object.
arjun.setAccountNumber();
console.log(arjun.getAccountNumber());
arjun.account_number = "00000"; // we cont change the account number from outside
console.log(arjun.getAccountNumber());
