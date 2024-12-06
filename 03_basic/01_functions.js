// console.log("J");
// console.log("A");
// console.log("G");
// console.log("R");
// console.log("I");
// console.log("T");
// console.log("I");

function myName(){      // function definition
    console.log("J");
    console.log("A");
    console.log("G");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");

}

//myName() // function reference or execution
//----------------------------------------------------------
// function addTwoNumbers(num1, num2){ // Parameters
//    console.log( num1 + num2);
// }

// const result = addTwoNumbers(5,2) // Arguments 
// console.log(result); // undefined
// this section prints 7 and undefined
//-------------------------------------------------------------

// function addNumbers(num1, num2){ // Parameters
//     let result = num1 + num2
//     console.log( result);
//  }
//  const result2 = addNumbers(3, 8)
//  console.log(result2); // undefined

 //this section prints 11 and undefined
//--------------------------------------------------------------
function addNum(num1, num2){ // Parameters
    return num1 + num2
}

const result = addNum(6, 9)
console.log(result);

//---------------------------------------------------------------

function loginUser(name){
    return `${name} just logged in`
}

const login = loginUser("Jagriti")

console.log(login);

//---------------------------------------------------------
// Rest operator

function calPrice(...num1){
    return num1
}
const price = calPrice(23,234,654)
console.log(price); // array of arguments

// ----------------obj in function-------------------------

function handleObj(anyobject){
    console.log(`User ${anyobject.name} added item worth rupees ${anyobject.price} in the cart`)

}

handleObj({
    name: "Jagriti",
    price: 999
})

//----------------------------------------------------------------
// Array in function

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,555,43]));
