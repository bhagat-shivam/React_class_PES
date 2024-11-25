
// function calculateTotal(cart) {
//     return cart.reduce((total, item) => total + item.price, 0);
//   }
  
//   const cart = [{ price: 100 }, { price: 200 }, { price: 300 }];
//   console.log(calculateTotal(cart)); // Output: 600



//   function mergeUserInfo(userInfo, preferences) {
//     return { ...userInfo, ...preferences };
//   }
  
//   const userInfo = { name: "John", age: 30 };
//   const preferences = { theme: "dark", language: "en" };
//   console.log(mergeUserInfo(userInfo, preferences)); 

  




//   function getFirstName(fullName) {
//     return fullName.split(" ")[0];
//   }
  
//   const fullName = "John Doe";
//   console.log(getFirstName(fullName)); // Output: John
  



//   function extractTitles(books) {
//     return books.map(book => book.title);
//   }
  
//   const books = [{ title: "Book 1" }, { title: "Book 2" }];
//   console.log(extractTitles(books)); // Output: ["Book 1", "Book 2"]




  
//   function simulateDelay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   simulateDelay(2000).then(() => console.log("Delayed for 2 seconds"));




  
//   function convertValuesToUpperCase(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === 'string') {
//         obj[key] = obj[key].toUpperCase();
//       }
//     }
//     return obj;
//   }
  
//   const obj = { name: "john", city: "new york" };
//   console.log(convertValuesToUpperCase(obj)); 
//   // Output: { name: 'JOHN', city: 'NEW YORK' }

  

  

// function wordLengths(words) {
//     return words.map(word => word.length);
//   }
  
//   const words = ["apple", "banana", "cherry"];
//   console.log(wordLengths(words)); // Output: [5, 6, 6]
  


//   function findCommonInterests(user1, user2) {
//     return user1.filter(interest => user2.includes(interest));
//   }
  
//   const user1Interests = ["coding", "music", "gaming"];
//   const user2Interests = ["sports", "music", "coding"];
//   console.log(findCommonInterests(user1Interests, user2Interests)); 
  // Output: ["coding", "music"]

  


//   function removeFieldFromFormData(formData, field) {
//     const { [field]: _, ...rest } = formData;
//     return rest;
//   }
  
//   const formData = { name: "John", age: 30, email: "john@example.com" };
//   console.log(removeFieldFromFormData(formData, "email")); 
  // Output: { name: 'John', age: 30 }

  


//   function countCharacterOccurrences(str) {
//     const count = {};
//     for (let char of str) {
//       count[char] = (count[char] || 0) + 1;
//     }
//     return count;
//   }
  
//   const text = "hello world";
//   console.log(countCharacterOccurrences(text)); 
  // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
  