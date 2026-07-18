// ==========================================
// Functions are Objects in JavaScript
// ==========================================

function multiplyBy5(num) {
    return num * 5;
}

// Functions can store custom properties because they are objects.
multiplyBy5.power = 2;

console.log(multiplyBy5(5));          // 25
console.log(multiplyBy5.power);       // 2

// Every function automatically has a prototype object.
// Since we haven't added anything to it yet, it is empty.
console.log(multiplyBy5.prototype);   // {}

/*
Conclusion:

- Functions are special objects in JavaScript.
- They can be called like a function and also store properties.
- Every function has a prototype object.
- Arrays, Functions, and String objects ultimately inherit from Object.prototype.
- Object.prototype is the top of the prototype chain.
- Object.prototype.__proto__ === null
*/


// ==========================================
// Constructor Function Example
// ==========================================

function createUser(username, score) {
    this.username = username;
    this.score = score;
}


// Adding shared methods using prototype.
// These methods are shared by every object
// created using the createUser constructor.

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
};


const user1 = new createUser("UserOne", 25);
const user2 = new createUser("Tea", 250);

user1.increment();
user1.printMe();      // Score is 26

user2.printMe();      // Score is 250


/*
==========================================
What happens when 'new' is used?
==========================================

1. A new empty object is created.

2. That object is linked to the constructor's prototype.
   (Its internal [[Prototype]] points to createUser.prototype.)

3. The constructor function is executed.
   'this' refers to the newly created object.

4. Properties are assigned.

   this.username = username;
   this.score = score;

5. Unless the constructor explicitly returns another object,
   JavaScript automatically returns the newly created object.


Internally:

const user1 = new createUser("UserOne", 25);

is similar to:

const obj = {};
obj.__proto__ = createUser.prototype;

createUser.call(obj, "UserOne", 25);

return obj;
*/
