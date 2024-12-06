// Dates object -> future API "Temporal" to make working with dates easier

let myDate = new Date() //object or instance
// console.log(myDate); // 2024-12-01T08:19:12.869Z
// console.log(myDate.toString()); // Sun Dec 01 2024 13:47:26 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sun Dec 01 2024
// console.log(myDate.toISOString()); // 2024-12-01T08:17:26.858Z
// console.log(myDate.toJSON()); // 2024-12-01T08:17:26.858Z
// console.log(myDate.toLocaleDateString()); // 1/12/2024
// console.log(myDate.toLocaleString()); // 1/12/2024, 1:47:26 pm

let myCreatedDate = new Date(2024, 11, 24, 5, 3) // this input format works with .toLocalString(),  

let theCreatedDate = new Date("01-12-2024")

let aCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.toLocaleString()); // 24/12/2024, 5:03:00 am
// console.log(myCreatedDate.toDateString()); // eg. Tue Dec 24 2024  //months starts from 0th index.
// console.log(myCreatedDate.toLocaleDateString()); // It follows : dddd/mm/yyyy 

let myTimeStamp = Date.now() // exact time stamp, polls or quizes

// console.log(myTimeStamp); // time in milliseconds
// console.log(myCreatedDate.getTime()); // can campare the time 
// console.log(Math.floor(Date.now()/1000)); //convert to seconds from millisecond , but it gives value in decimals to avoid that use Math.floor , chhota value esaily comapre hojata hai 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay()); // indexd from 0 , 0->Sunday, 1->Monday like that ...
console.log(newDate.getMonth() + 1); // To avoid confusion to end user as months are indexed from 0 

newDate.toLocaleString('default', {
    weekday: "long", 
    //timeZone: "indian standard time"
})