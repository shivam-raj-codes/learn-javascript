const myArr = [];
// %DebugPrint(myArr);

// continious - Array, Holey - Array -> holey means array with holes

// SMI (small integer)
// packed element
// Double (float, string, function)

const arr2 = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS -> by default

arr2.push(6.0);
// PACKED_DOUBLE_ELEMENTS -> as it once become PACKED_DOUBLE, now even if we pop this element it can't become PACKED_SMI_ELEMENTS

arr2.push('7');
// PACKED_ELEMENTS

arr2[10] = 11;
// HOLEY_ELEMENTS -> because now it has multiple type of data like as - String,int, double & gaps is also there

console.log(arr2); // [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arr2.length); // 11
console.log(arr2[9]); // trying to access Empty - position => o/p: undefined 

console.log(arr2[19]); // undefined


// how array found any index- values
// 1. bound - check => start index and legth of array -> last index

// if we found holey array: -> on checking bound
// hasOwnProperty(arr2, 9) // is there anyone at 9th position of array -> if undefine now check in prototype . i.e; doing below
// hasOwnProperty(arr2.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// hoes are very expensive in js

// hasOwnProperty() check is very expensive it makes slow to process.

const arr3 = [1, 2, 3, 4];
console.log(arr3[2]);

// Optimsation Order ----->
// SMI > Double > PACKED
// HOLEY_SMI > HOLEY_Double > HOLEY_PACKED


const arr4 = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS.

arr4[0] = '1'; // HOLEY_ELEMETS. once it becomes Holey it will be forever holey
arr4[1] = '2';
arr4[2] = '3';

const arr5 = [];  // got PACKED_SMI in this way not HOLEY
arr5.push('1'); // PACKED
arr5.push('2'); // PACKED
arr5.push('3'); // PACKED

const arr6 = [1, 2, 3, 4];

arr6.push(Infinity); // as we push 'Infinity' or 'NAN' the array become DOUBLE now it can't be upgrade to SMI

// for, for-of, forEach -> in js whatever method is availabe try to mostly use that, don't try to make own copy for-loop or own copy method