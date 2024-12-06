//array

//string , number ,or mix
//shallow copies , references use krta hai 

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Rogers", "Natasha", "Bruce", "Tony", "OdinSon"]

const myArr2 = new Array(1, 2, 3, 4,)

//console.log(myHeros[1]);

// Array Methods

myArr.push(6) // push apped krta hai 
myArr.push(7)
//myArr.pop() // remove from the end
//console.log(myArr);


myArr.unshift(9) // Adds element in the start of the array
myArr.shift() //remove from start

//operation
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // Strind me convert krdiya 

// console.log(newArr);
// console.log(myArr); 

// console.log(typeof newArr);


//slice , splice

//SPLICE - manupulates the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log("SLICE : ", myn1); // Simply gives that slice as output , without including the end para &&& without manipulating the OG array.
console.log("OG : ", myArr);

const myn2 = myArr.splice(1,3)
console.log("SPLICE : ", myn2); // Gives the elements at that parameter including the end para, and also removes that part from the OG array hence manupulating the OG array.
console.log("OG : ", myArr);