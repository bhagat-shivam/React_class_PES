// Print Even Numbers from an Array

// function printEvenNumbers(arr) {
//     const evenNumbers = arr.filter(num => num % 2 === 0);
//     console.log("Even Numbers:", evenNumbers);
// }
// printEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Calculate Factorial of a Number

// function factorial(num) {
//     if (num < 0) return "Invalid input";
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log("Factorial:", factorial(5));


//  Filter Names Starting with a Specific Letter

// function filterNamesByLetter(names, letter) {
//     const filteredNames = names.filter(name => name.startsWith(letter));
//     console.log(`Names starting with '${letter}':`, filteredNames);
// }
// filterNamesByLetter(["Ali", "Baba", "carrot", "dema"], "A");

// Sum of Elements in an Array

// function sumArray(arr) {
//     const sum = arr.reduce((total, num) => total + num, 0);
//     return sum;
// }
// console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5]));


// Check if a String is a Palindrome

// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// console.log("Is Palindrome:", isPalindrome("racecar"));


// Sort an Array of Objects by Property

// function sortByProperty(arr, property) {
//     arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
//     return arr;
// }
// const people = [
//     { name: "shivam", age: 25 },
//     { name: "shubham", age: 22 },
//     { name: "saurav", age: 30 }
// ];
// console.log("Sorted by Age:", sortByProperty(people, "age"));
