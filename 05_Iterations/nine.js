// Reducer
const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

// console.log(myTotal);

// -----------as arrow function---------------- 

// const myTotal = myNums.reduce( (acc, curr) => {return acc+curr}, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:999
    },
    {
        itemName: "mob dev course",
        price:3200
    },
    {
        itemName: "data science course",
        price:22989
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay)