// Primitive

// 7 types : String, NUmber, Boolean, Null, undefined, Symbol, BigInt 

// Dynamic language

const id = Symbol('123')
const another = Symbol('123')

//console.log(id === another); //false

const bigNumber = 3456798765345678n // "n" defines its type as bigint
// console.log(typeof bigNumber);
// console.log(bigNumber);

//Reference (Non primitive)

// Array, objects, Functions

const hero = ["Shaktiman", "Naagraj", "Doga"];

let muObj={
    name: "Jango",
    age: 22
}

//function(){} //basic structure

const myFunction=function(){
    console.log("Hello World");
}





//*********************MEMORY*************************************************************

//Two types : Stack (Premitive--copy), Heap (Non primitive--refernece--original value)

let myName = "Jango"

let anotherName = myName
anotherName = "JSP"

console.log(myName);
console.log(anotherName);

// Object

let userOne = {
    email: "jango@gmail.com",
    upi: "user1@ybl"
}

let userTwo = userOne

userTwo.email = "jsp@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
