// const student = {
//     name:"shivam",
//     age:"24",

//     greet:function(){
//         console.log(`My name is ${this.name}`);
//     }
// };

// // console.log(student.name); 
// student.greet(); 



// getter & setter method
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {     //getter for name
        return this._name;
    }

    set name(newName) {  // setter for name
        this._name = newName;
    }

    get age() {         // getter for age
        return this._age;
    }

    set age(newAge) {   //setter for age
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Please provide a valid age.");
        }
    }
}

// Instantiate a new Person object
let person1 = new Person('Neha', 20);

console.log(person1.name); // Outputs: Neha
console.log(person1.age);  // Outputs: 20

// Update name and age using setters
person1.name = "Shivam";
person1.age = 25;

console.log(person1.name); // Outputs: Shivam
console.log(person1.age);  // Outputs: 25
