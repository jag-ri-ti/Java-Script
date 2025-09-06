// const userEmail = "Jango.24@gamil.com"
const userEmail = []
if(userEmail){
    console.log("logged in")
}else{
    console.log("Not logged-in");
}

//Fasly values 

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values

//"0", "false", " ", [], {}, function(){}

//Check if an array is empty
if (userEmail.length === 0) {
    console.log("Array is Empty");
}

//Check if an object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){     //Array bn jata hai keys ka 
    console.log("Object os empty") 
}


// NULLISH Coalescing Operator (??): null, undefined

let val1; 
val1 = 5 ?? 10 //5
val2 = null ?? 10 //10
val3 = undefined ?? 15 //15
val4 = null ?? 20 ?? 25 //20
val5 = null ?? undefined ?? 30  //30

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);

// Terniary OPerator

//condition ? true : false

const coldCoffeePrice = 60
coldCoffeePrice >= 40 ? console.log("more than 40") : console.log("less than 40 ")