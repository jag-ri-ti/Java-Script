const name = "Jagriti"
const middle = " Singh"
const last = " Patel"

// console.log(name + middle + last); // Khubsurti nhi hai , maja nhi aaya

// console.log(`First name = ${name} , Middle name = ${middle}, Last name = ${last}`); // String interpolation (place holders)

//other way to declare string

const nickName = new String('Shalu urf Jagriti')

//console.log(nickName[0]); // key-value pair

// console.log(nickName.length);

// console.log(nickName.toUpperCase());
// console.log(nickName.toLowerCase());

// console.log(nickName.charAt(4));
// console.log(nickName.indexOf('u')); 

const newString = nickName.substring(0, 4)
console.log(newString);

const anotherString = nickName.slice(-5, 2 )
console.log(anotherString);

const newStringOne = "    jango   "
console.log(newStringOne.trim()); //applies both at a time : trimStart() and trimEnd()

const url = "https://Jango.com/jugriti%20patol"

console.log(url.replace('%20', '-'));

console.log(url.includes("jugriti")) //returns Boolean

console.log(nickName.split(' '))