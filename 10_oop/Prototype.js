// ==========================================
// Prototype Inheritance
// ==========================================

// We don't want to call trim() every time.
// Instead, we'll create our own method named
// trueLength() that will be available on every string.

// let myName = "shivam    ";
// console.log(myName.trueLength());


// ==========================================
// Objects & Arrays
// ==========================================

let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    Stark: "sling",

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`);
    }
};


// ==========================================
// Adding a method to Object.prototype
// ==========================================

// Every object in JavaScript ultimately inherits
// from Object.prototype.
//
// Therefore, if we add a method here,
// every object (arrays, functions, objects, etc.)
// can access it.

Object.prototype.shivam = function () {
    console.log("shivam is present in all objects");
};

// heroPower.shivam();   // Works
myHero.shivam();         // Also works


// ==========================================
// Adding a method only to Array.prototype
// ==========================================

// Only arrays inherit from Array.prototype.
// Normal objects do NOT.

Array.prototype.heyArr = function () {
    console.log("I say Hello");
};

myHero.heyArr();      // Works

// heroPower.heyArr();   // Error
// Because heroPower is a plain object,
// not an array.


// ==========================================
// Inheritance Example
// ==========================================

const User = {
    name: "hey",
    email: "h@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    // Inherit properties from TeachingSupport
    __proto__: TeachingSupport
};

// Old syntax (not recommended)
// Teacher.__proto__ = User;


// Modern syntax
// TeachingSupport now inherits from Teacher

Object.setPrototypeOf(TeachingSupport, Teacher);


// Prototype chain:
//
// TASupport
//      ↓
// TeachingSupport
//      ↓
// Teacher
//      ↓
// Object.prototype
//      ↓
// null



// ==========================================
// Custom String Method
// ==========================================

let anotherUserName = "shushi   ";

String.prototype.trueLength = function () {

    console.log(`${this}`);

    console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();

"shiva".trueLength();

"ice".trueLength();


/*

Key - Points: 


🌟 Every function has a prototype object.

🌟 Every object ultimately inherits from Object.prototype.

🌟 Arrays inherit from Array.prototype.

🌟 Strings inherit from String.prototype.

🌟 We can add our own methods using prototypes.

🌟 Methods added to Object.prototype become
   available to almost every object.

🌟 Methods added to Array.prototype are available
   only to arrays.

🌟 Object.setPrototypeOf() is the modern way
   to set up inheritance.
*/