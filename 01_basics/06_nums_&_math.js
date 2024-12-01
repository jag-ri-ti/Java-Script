 const score = 400  
 //console.log(score);

 const balance = new Number(100)
// console.log(balance);

//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));

 const otherNumber = 123.8966

 //console.log(otherNumber.toPrecision(3));

 const hundreds = 1000000
 //console.log(hundreds.toLocaleString('en-IN')); // Default US standards

 //****************************** MATHS **********************************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,7,2,0));
// console.log(Math.max(4,7,2,0));

console.log(Math.random());  //values between 0-1 (eg: 0.1, 0.9, etc.)
console.log(Math.random()*10 + 1) // if the value is 0.1 floor will give 0, to avoid it 1 is added. kyuki hame min 1 ya usse jyada chaiye 
console.log(Math.floor(Math.random()*10) + 1); // to ye number between 1-9 ke bich me generate karega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)