let score="33ba"

//second case , suppose :
//let score = null 
//output : object object number 0

//third case :
//let score = undefined
//output : undefined undefined number NaN 

//forth case , Boolean number:
//let score = true
//output : boolean boolean number 1 (0 in case of false)


//sometimes the values are coming from the frontend , we dont know the type so we use conversions 
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber=Number(score)  //score me jis bhi type ki value ho vo NUMBER me convert ho jayegi!!
//console.log(typeof valueInNumber); // will show number for 33aa also which is wrong
//console.log(valueInNumber) //NaN output aayega , kyuki 33abc number nhi hai 

//dont relay on number in JS 
//No strict check , that's why people use TypeScript

//let isLoggedIn = 1 //(true or (0)false)

//let isLoggedIn = "" // false in case of inverted comma but but but ...true in case of inverted commas with a space .

let isLoggedIn = "Jango" //true

let booleansIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleansIsLoggedIn);  //true

let someNumber = 33 

let stringNumber = String(someNumber)
//console.log(stringNumber); //33
//console.log(typeof stringNumber); //string


//***************Operations***********************************************************************

let value = 3
let negValue = -value

//console.log(negValue);
//console.log(2+3);//etc etc ...

let str1 = "Hello"
let str2 = " Jango"

let str3 = str1+str2 
//console.log(str3);

//console.log("1" + 2); //will treat both as string if any one of them is string 
//console.log(1 + "2");
//but but
//console.log("1" + 2 + 2);//122
//console.log(1 + 2 + "2");//32
//kya notice kiya ???
//ki pehle vale ko add kiya (1+2=3), then string ki tarah treat kiya , concate kiya ("3" + "2" = 32)
//coz of the Guidelines 

//convertions can be done by in some messy ways like:
// console.log(+true);//1
// console.log(true+);//Error
// console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2+2//better ways to assign values, readabilty is on priority

//postfix ans prefix (js mdn)
let gameCounter = 100
gameCounter++;//postfix
console.log(gameCounter); //101

//++gameCounter;//prefix

