const character = "#";
const count = 8;
const rows = [];
let inverted = true;
// console.log(rows[0]);

// if(" "){
//   else if( 5 > 10){
//     console.log("I am done")
//   }
//    else{ console.log("You are out")}
  
// }

// Using a different type of loop

/** for(let i = 1; i <= count; i ++){
    rows.push(padRow(i, count));
} **/

// let continueLoop = false;
// let done = 0;



// while(rows.length < count){
//   // done++;  m
//   rows.push(padRow( rows.length +  1, count));
// }

for(let i = count ; i > 0 ; i--){
    
    if (inverted){
        rows.unshift(padRow(i , count));         
    }
    else {
        rows.push(padRow(i , count)); 
    }
}

/** const numbers = [1, 2, 3]
const unshifted = numbers.unshift(0);
console.log(unshifted);
console.log(numbers);
const shifted = numbers.shift();
console.log(numbers); 
**/


let result = "";


for(const row of rows){
    result = result + "\n" + row;
}


console.log(result);

function padRow(rowNumber, rowCount){
// const test = "Testing";
// console.log(test);
// console.log("This works!");
// return test;
// console.log("This works!");

return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

const call = padRow();

console.log(call);



/** function addTwoNumbers(a,b){
    return a+b;
   }
  
const   sum = addTwoNumbers(5, 10);
  
   console.log(sum);
   **/

/** rows[2] = 10;

console.log(rows);

rows.push("FreeCodeCamp");

console.log(rows); **/

/** let cities = ["London","New York","Mumbai"];
console.log(cities);

cities[cities.length - 1] = "Mexico city";
console.log(cities); **/



/** let pushed = rows.push();
console.log(pushed);

let popped = rows.pop();
console.log(popped);
console.log(rows);**/




