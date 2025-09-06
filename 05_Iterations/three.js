// for of   // what is three.js libreary

//higher order function 

//["","",""]//string ka array 
//[{},{},{}]object ka arrray 

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

//--------Maps------------

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

//console.log(map);

// for (const key of map) {
//     console.log(key);// Array 
// } 
// for (const [key, value] of map) {
//    console.log(key, ' :- ', value);
// }

const myObject ={
   'Game1' : 'Mouthwash' , 
   'Game2' : 'SubwaySurfer'
}
for (const [key, value] of myObject) {
   console.log(key, ':-', value);       //object is non iterable 
}
