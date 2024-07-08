const character =  "$";
const count = 10;
const rows = [];
const inverted= true;



for(let i = 1; i < count; i++){
    if(inverted){
        rows.push(add(i, count));
    }
    else{
        rows.unshift(add(i, count));
    }
}

let outcome = ''

for(let row of rows){
   outcome = outcome + "\n" + row;
}

console.log(outcome);

function add(rowNumber, rowCount){
    return " ".repeat(rowCount-rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// const call = add();
// console.log(call);
