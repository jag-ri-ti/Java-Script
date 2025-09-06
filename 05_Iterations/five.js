const coding = ["js","ruby","java","python","cpp"]
//Array for of
//object for in 

// coding.forEach( function (item) {
//     console.log(item);

// } ) 

 // Callback function hai hai
//isliye isme se naam hta do


// coding.forEach( (item) => {
//     console.log(item)
// })

// this was arrow function 

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  //printme ka reference dena hai(like it is done here already) ...printMe() aise krke usko execute nhi kr dena hai . 

// coding.forEach( (item, index, arr)=>{    // Foreach ke pass baaki kafhi chizo ka access hota hai ... not only item!
//     console.log(item, index, arr);
// } )

//[{},{},{}]
//Array of objects 
const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
     {
        languageName: 'java',
        languageFileName: 'java'
    },
     {
        languageName: 'python',
        languageFileName: 'py'
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )