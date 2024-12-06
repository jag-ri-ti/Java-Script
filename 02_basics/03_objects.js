// two ways to declare literal or constructure
//construter - singleton a object 
//Object.create - constructer
// object literals

const mySym = Symbol("key1")

const user = {
    name: "Jagriti",
    age: 20,
    [mySym]: "key1",//refers to a symbol
    location: "Delhi",
    isLoggedIn: false, 
    lastLoginDay: ["Mon", "Wed"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["mySym"]); // theek hai pr typr string btayega , jbki vo to symol hai 
// console.log(user[mySym]); // after putting mysum in square bracket in the object. 

 
user.name = "Shalu"
//Object.freeze(user) // Don't allow any further changes into the Datastructure
//console.log(user);

//function , can treate as a variable 

user.greeting = function(){
    console.log(`Hello , ${this.name}`);
}

console.log(user.greeting());