//🌟 prefer -> String declaration
const name = "shivam";
const repoCount = 50

// console.log(name + repoCount + " value");  //-> this is out-dated

// We'll use string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another Syntax to: create a string
const gameName = new String('shivam-hc-com');

console.log(gameName[0]);
console.log(gameName.__proto__);


// Strings are immutable.
// toUpperCase() returns a NEW string; it does not modify the original.
console.log(gameName.length);
console.log(gameName.toUpperCase()); 


// at this posi: which character are there
console.log(gameName.charAt(2));

// to know index if a char
console.log(gameName.indexOf('i'));


// Slice - the String
console.log("\n-----Slicing: ----- ");
console.log(`Original String: ${gameName}`);
const slicedString = gameName.substring(0, 4); // range -> [start, end)
console.log(`Sliced String: ${slicedString}`);


// slice() supports negative indices (similar to Python slicing)
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


// index position for negative slicing
//  J  a  v  a  S  c  r  i  p  t
//  0  1  2  3  4  5  6  7  8  9 -> normal - slicing

// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 -> neg -slicing

let str = "JavaScript";
console.log(str.slice(-6)); // [-6, length] -> o/p => Script

console.log("-----trim----");

const newString1 = "    shivam   ";
console.log(`Original String: ${newString1}`);


console.log(`Trimmed String: ${newString1.trim()}`); // remove all whiteSpace from left and right

console.log("\n-------using replace() ----");
const url = "https://www.google.com/google%20shivam";


console.log(url.replace('%20', '-'));

// to know whether this String is available inside the url or not?
console.log(url.includes('shivam'));


console.log("\n-----Split string into Array-----");

console.log(gameName.split('-')); // will split String based on ('-') and return an array

console.log("\n-----some other methods of String-----\n");

// repeat() -> repeat give string multiple - times
console.log("Hi ".repeat(3));

// startsWith() -> return boolean
console.log(gameName.startsWith("shivam"));

// endsWith() -> return boolean
console.log(gameName.endsWith("com"));

// replaceAll()
const text = "cat dog cat";
console.log(text.replaceAll("cat", "lion"));





