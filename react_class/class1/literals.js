//  let e = parseInt("111",2);
//  console.log(e); // 7



// **************************************** PROMISES   **************************************************************

// console.log("Hello");

// setTimeout(function() {
//     console.log("hello from " + "shivam");
// }, 3000);

// console.log("Hello world");


// PROMISES EXPAMPLE

// let myPromise = new Promise(function(resolve,reject) {
//     let success = false;
//     if (success) {
//         resolve("success");
//     }
//     else {
//         reject("failure");
//     }
// });

// myPromise.then(function(value) {
//     console.log("success message: "+value);
// })
// .catch(function(value) {
//     console.log("failure message: "+value);
// })



// PROMISE USING setTIMEOUT
// let myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("wait promising is running.....");
//         let success = true;
//         if (success) {
//             resolve("success");
//         } else {
//             reject("failure");
//         }
//     }, 2000);
// });
// myPromise.then(function(value) {
//     console.log("success message: " + value);
// })
// .catch(function(value) {
//     console.log("failure message: " + value);
// });            // waiting promising is running.....
                // success message: success

// ***********************************************   MAP   ******************************************************************************

// let myMap = new Map();
// myMap.set("name", "shivam"); // set function used to set the key and value
// myMap.set("age", 22);
// console.log(myMap.get("name")); // shivam
// console.log(myMap.has('age')); // true
// myMap.delete('age'); // delete function used to delete the key and value
// console.log(myMap.has('age')); // false


let map1 = new Map([[1,10], [2,20], [3,30]]);
console.log(map1);   // Map(3) { 1 => 10, 2 => 20, 3 => 30 }
console.log(map1.has(6)); // false
console.log(map1.size); // 3

map1.clear(); // clear function used to clear all the key and value
console.log(map1); // Map(0) { size: 0 }