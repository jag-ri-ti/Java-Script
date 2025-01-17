//Arrow --> this keyword --> object
//lets make an object 

const user = {
    username: "Jagriti",
    Rollno: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username = "Patel"
user.welcomeMessage() 