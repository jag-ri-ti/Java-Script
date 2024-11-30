// Primitive

// 7 types : String, NUmber, Boolean, Null, undefined, Symbol, BigInt 

// Dynamic language

const id = Symbol('123')
const another = Symbol('123')

console.log(id === another); //false

const bigNumber = 3456798765345678n // "n" defines its type as bigint
console.log(typeof bigNumber);
console.log(bigNumber);

//Reference (Non primitive)

// Array, objects, Functions

const hero = ["Shaktiman", "Naagraj", "Doga"];

let muObj={
    name: "Jango",
    age: 22
}

//function(){} //basic structure

const myFunction=function(){
    console,log("Hello World");
}