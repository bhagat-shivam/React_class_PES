// Second File

// specific named exports from index.js
import {pi, add} from './index.js'

// import the default export from index.js
// import multiply from './index.js'

console.log(`pi: ${pi}`);
console.log(`Sum: ${add(5,3)}`);
// console.log(`Multiply: ${multiply(5,3)}`);

// File: main.js

import MyClass from './index.js';

const myInstance = new MyClass('Shivam');
myInstance.greet(); 
