// stack (primitive), Heap (Non - primitive)

// when stack-memory is used, we get the copy of variable

// when Heap-memeory is used, we get the Original - reference of variables

let myName = "shivam";

let anotherName = myName; // copy of myName is being assigned

anotherName = "john snow"; // change made only in copy of myName 

console.log(anotherName);
console.log(myName);


// Non - primitive

let user1 ={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1; 

user2.email = "s@google.com";

console.log(user1.email);
console.log(user2.email);