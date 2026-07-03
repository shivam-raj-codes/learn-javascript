// ===============================
// JavaScript Numbers
// ===============================

// Creating a Number

const score = 400;
console.log(score);

// Explicitly creating a Number object
const balance = new Number(100);
console.log(balance);

// ===============================
// Number -> String
// ===============================

// Converts Number to String
// After conversion, string methods can be used.
console.log(balance.toString());

// ===============================
// toFixed()
// ===============================

// Controls the number of digits after the decimal point.
console.log(balance.toFixed(2)); // 100.00

// ===============================
// toPrecision()
// ===============================

const preciseValue = 123.8966;

// Returns a number with the specified total number of significant digits.
console.log(preciseValue.toPrecision(4)); // 123.9

// Examples:
// 123.8966 -> toPrecision(3) => 124
// 123.8966 -> toPrecision(4) => 123.9
// 123.8966 -> toPrecision(5) => 123.90

// ===============================
// toLocaleString()
// ===============================

const hundreds = 1000000;

// Formats the number according to a locale.

console.log(hundreds.toLocaleString());         // 1,000,000 (default locale)
console.log(hundreds.toLocaleString("en-US"));  // 1,000,000
console.log(hundreds.toLocaleString("en-IN"));  // 10,00,000 (Indian format)


