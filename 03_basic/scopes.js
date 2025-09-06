const user={
    username:"Jagriti",
    price:99,
    message: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this)
    }
}

// user.message()
// user.username = "Patel"
// user.message()
// console.log(this)

function chai(){
    const username="Singh"
    //console.log(this.username);// can use "this" in objects , function me "undefined" output aayega
}
//chai()


const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(4,6)) 