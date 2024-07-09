const character = "#";
const count = 10;
const rows = [];
let inverted = true;



for(let i = 1; i < count; i++){
    if(inverted){
        rows.push(add(i , count));
    }
    else{
        rows.unshift(add(i , count));
    }
}


let result = "";

for(row of rows){
    result = result + "\n" + row;
}

console.log(result)

function add(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

