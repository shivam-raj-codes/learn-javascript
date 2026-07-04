// array -> doesn't store only Homogenous type data

// js - array -> is re-sizeable
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

// arrays in JavaScript on copy operation makes shallow copies
// shallow copy => copy of object whose properties share the same reference
// deep copy => properties don't share same reference

// way to initialize 
const myHeros = ["X-men", "Thor"];
const myArr2 = new Array(1, 3, 7, 8);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // removes last element

myArr.unshift(9); // insert at 0th index and shift values right (not recommended for large arrays)
myArr.shift(); // removes first element

console.log(myArr.includes(9)); // boolean
console.log(myArr.indexOf(9)); // -1 if not found
console.log(myArr.indexOf(3)); // index of 3

const newArr = myArr.join(); 
console.log(myArr); 
console.log(newArr); 
console.log(typeof newArr); // string

// Slice & Splice
console.log("===== Slice & Splice =====");

console.log("Original Array:", myArr);

const myn1 = myArr.slice(1, 3);
console.log("After slice(1,3):", myn1); // does NOT change original array

console.log("Original Array after slice:", myArr);

const myn2 = myArr.splice(1, 3);
console.log("After splice(1,3):", myn2); // modifies original array
console.log("Original Array after splice:", myArr);