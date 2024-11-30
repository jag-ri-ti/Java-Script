// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//problem tb hai jb different types ko compare krte hai 

// console.log("2" > 1); //true   as js ne apne aap he convert krdiya string ko number me 
// console.log("02" > 1); //true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

//reason ... 
//An equality check == and comaprison >, <, >=, <= work differently.
//Comarison convert null to a number, treating it as 0.
//that is why in 3rd(null >= 0) is true and 1st(null > 0) is false.

//=== strict check(comapares even the datatype of the values passed)
console.log("2" == 2); //true
console.log("2" === 2); //false

//CLEAN CODE IS PRIOR