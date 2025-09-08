const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = myNumbers.map( (num) => {return num + 10})
// console.log(newNumbers);

// newNumbers.forEach( (num) => {
//     if (num>=1) {
//         return num + 10
//     }
// })      not working 

// ------------------------ chaining-----------------------

const myNums = myNumbers
                .map( (num) => {return num * 10} )
                .map((num)=>{return num + 1})
                .map( (num) => num + 4 )
                .filter((num)=> num >= 40)
console.log(myNums);