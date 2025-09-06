const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("Allow to buy the course");
}else {
    console.log("Not allowed to procede")
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}