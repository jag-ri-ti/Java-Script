const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     //ye return kuch nhi krta .. apko manually likhna padega ki kya return krna hai !

//     return item
// } )
// // nut forEach kuch return nhi krts .!
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// forEach kuch return nhi krta but filter krta hai return

// const newNums = myNums.filter( (num) => num > 4  )  //filter bhi callback leta hai !
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//    return num > 4
// })

// console.log(newNums)
// ;

const newNums = []

myNums.forEach((num)=>{
    if (num > 4) {
        newNums.push(num)

    }
})

console.log(newNums);  