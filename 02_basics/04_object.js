// Objects

//const instaUser = new Object() //Singleton object
const instaUser2 = {} // Not a singlrton object

instaUser2.id = "123Ok"
instaUser2.name = "Oblivion"
instaUser2.isLoggedIn = false
//console.log(instaUser2);

const regularUser = {
    userName: {
        fullName: {
            firstname: "Jagriti",
            lastname: "Patel"
        }
    }
}
//console.log(regularUser.userName.fullName.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // object into object , loop . So instead we will use assign
// const obj4 = Object.assign({}, obj1, obj2) // empty array to use as target and rest all the obj as source

const obj5 = {...obj1, ...obj2}
//console.log(obj5);

//Database se value, array of objects aata hai 

const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    }
]

//user.map
users[1].email
// console.log(instaUser2);

// console.log(Object.keys(instaUser2)); //array of keys
// console.log(Object.values(instaUser2));
// console.log(Object.entries(instaUser2)); // array of pairs in a array

// console.log(instaUser2.hasOwnProperty('isLoggedIn'));
// **********************DESTRUCTURING********************************
const course = {
    cousrename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor)

const {courseInstructor: instructor} = course //change name 
//console.log(courseInstructor);
console.log(instructor);

// -------- React destructuring ------------------------
// const navbar = ({company}) => { // react follows this structure in place of (prop.name, prop.age )

// }

// navbar(company = "")

//API - earlier was xml but now it returns in json (objects or array of onj)
// {
//     "name": "jagriti",
//     "age": 20
//     // where key & value both are string ''
// }
