const character = "#";
const count = 8;
const rows = [];
// console.log(rows[0]);

for(let i = 0; i < count; i = i + 1){
    rows.push(padRow(i+1, count));
}

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




