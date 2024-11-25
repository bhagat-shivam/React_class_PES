//First File

//Named export for a constant
export const pi = 3.14;

// Named export for a function
export function add(a,b) {
    return a+b;
}

// default export for a function
// export default function multiply(a,b)
// {
//     return a*b;
// }

// File: MyClass.js

class MyClass {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
export default MyClass;




