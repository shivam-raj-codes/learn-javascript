// =====================================================
// OBJECT LITERAL
// =====================================================

// 'this' refers to the current object.

const user = {
    username: "shivam",
    loginCount: 8,
    signIn: true,

    getUserDetails: function () {

        // console.log("Got user details from database");

        // console.log(username);
        // ❌ ReferenceError: username is not defined
        // Because JS looks for a variable named 'username'.
        // The property belongs to the object, so we must use 'this'.

        // console.log(this.username);
        // Output: shivam

        // console.log(this);
        // Prints the current object (current context).
    }
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);
// In Node.js, the global 'this' is {} (empty object).



// =====================================================
// CONSTRUCTOR FUNCTION
// =====================================================

// 'new' keyword is used to create multiple objects
// from the same constructor function.

function User(username, loginCount, isLoggedIn) {

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method inside constructor function
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    // Optional when using 'new'
    // JavaScript automatically returns the new object.
    return this;
}



// =====================================================
// WITHOUT 'new'
// =====================================================
m
// const user1 = User("shiv", 12, true);
// const user2 = User("heyy", 11, false);

// Since both function calls use the same 'this',
// the second call overwrites the values from the first.
// Therefore, user1 will not have its own separate data.



// =====================================================
// WITH 'new'
// =====================================================

const user1 = new User("shiv", 12, true);
const user2 = new User("heyy", 11, false);

// Each object gets its own separate copy.
// No values are overwritten.

console.log(user1.constructor);



// =====================================================
// WHAT HAPPENS WHEN WE USE 'new' ?
// =====================================================

/*
1. A new empty object ({}) is created.

2. The constructor function is called.

3. 'this' refers to the newly created object,
   so all properties assigned using 'this'
   are added to that object.

4. The newly created object is returned automatically.
*/