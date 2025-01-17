var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    //console.log("Inner: ",a);
}

// for (let i = 0; i < Array.length; i++){
//     const element = array[i];
// }

//console.log(a);

//
// CLOSURE
function one(){
    const username = "Jango"

    function two(){
        const website = "Youtube"
        //console.log(username);
    }
    //error//console.log(website);

    two()
}

one()

if (true) {
    username = "Jagriti"
    if (username === "Jagriti") {
        const website = "Resume"
        //console.log(username + website);
    }
    // {error as outofscope}console.log(website);
}
//{error}console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addone(num){
//     return num + 1;
// }
// addone(5)

// //also known as Expression 
// const addtwo = function(num){
//     return num + 2;
// }

// addtwo(5)


//------------------also --------------agr isko hm dusri tarah se likhe to ----------------------

//hoisting
console.log(addone(5));
function addone(num){
    return num + 1;
} // this will run without throwing any error , but

addtwo(5) 
const addtwo = function(num){
    return num + 2;
}








