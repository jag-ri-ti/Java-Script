// JOining two arays 

const marvel_Heros = ["Nat", "Steve", "Tony", "Hawk", "Banner", "Thor"]
const dc_Heros = ["Aquaman", "Superman", "Cyborg", "Wonderwoman", "Splash"]

//marvel_Heros.push(dc_Heros) // Adds array of element to an array...[..,..,..[..,..,..]] like this.
// console.log(marvel_Heros);
// console.log(marvel_Heros[6][1]);

// const all_Heros = marvel_Heros.concat(dc_Heros)// Does the same work
// console.log(all_Heros); //adds two array and returns a new array

const all_new_Heros = [...marvel_Heros, ...dc_Heros] // spread array
//console.log(all_new_Heros); 

const looped_array = [1, 2, 3, [6, 5, 4, [0, 9]]]
//console.log(looped_array);
const submerged_array = looped_array.flat(Infinity);
//console.log(submerged_array);

 

console.log(Array.isArray("Jagriti")); // Boolean output
console.log(Array.from("Jagriti")); // Makes the Array out of the given argument .
console.log(Array.from({name: "Jagriti"})); // intersting ...need to tell kiska array bnana hai keys ka ya values ka .otherwise returns empty array

let score = 1000
let score2 = 2000
let score3 = 3000
console.log(Array.of(score, score2, score3)); // ameks out of the elements



