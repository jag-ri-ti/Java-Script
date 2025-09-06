//for 

for (let index = 0; index <= 10; index++) {
    const element = index;
    //console.log(element)
}

for (let i=5; i>=0; i--){
    const ele = i;
    //console.log(ele)
}

for (let i = 0; i<=10; i++){
    const numbers = i;
    if (i == 5){
       // console.log(`${numbers} Star`)
        continue;
    }
    
    //console.log(numbers)
}

for(let i = 1; i<=5; i++){
    //console.log(i)
    for(let j = 1; j<=10; j++){
        //console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ["Tony", "Steve", "Natasha", "Bruce", "Thor", "Clint"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//Break and continue 

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;//break;
    }
    //const element = array[index];
    console.log(`Value of index is ${index}`);
}

