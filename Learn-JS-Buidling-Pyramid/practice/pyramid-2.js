const symbol = '*';
const iteration = 10;
const myRow = [];
let inverted = false;

for (let i = 1; i < iteration ; i++){
    if(inverted) {
        myRow.push(plus(i , iteration));
    }
    else{
        myRow.unshift(plus(i, iteration))
    }
}

let result = "";

for(const dime of myRow){
    result = result + "\n" + dime;
}

console.log(result);

function plus(rowNumber, rowCount){
    return " ".repeat(rowCount-rowNumber) + symbol.repeat(2 * rowNumber-1) + " ".repeat(rowCount - rowNumber)
}   

const call = plus();
console.log(call);
