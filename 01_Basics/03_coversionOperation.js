let score = "33abc";

let score2 = null;

console.log(typeof(score));

// convert string -> Number - dataType
let valueInNumber = Number(score);

console.log(typeof(valueInNumber));

console.log(valueInNumber); // -> NAN => if there is any String that can't be covert gives NAN


// convert "null" into Number - dataType
let nullInNumber = Number(score2);

console.log(nullInNumber); // -> 0


let score3 = undefined;

let convInNum = Number(score3);
console.log(convInNum); // -> NAN

// boolean -> Number
let isValid = true;

let isValidNum = Number(isValid);
console.log(isValidNum);


/* Notes: --->
   "33" => 33

   "33abc" => NAN (🌟although its type is Number)

   true -> 1
   false -> 0

*/

console.log("\nConverting into -> Bollean");

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
console.log(typeof(booleanIsLoggedIn));

console.log("empty string -> boolean");

let emptyStr = "";

let boolEmpty = Boolean(emptyStr);
console.log(boolEmpty);

let str = "shivam";
let boolStr = Boolean(str);
console.log(boolStr);


// 1 -> true; 0 -> false
// "" => false
// "shivam" => true



console.log("\nNumber -> String");

let someNumber = 33;
let stringNumber = String(someNumber);

console.log("strNumber: " + stringNumber);
console.log("strNumber type: " + typeof(stringNumber));