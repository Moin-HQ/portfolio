const symbol = '+';
const line = [];
const timming = 8;
const inverted = false;

for(let i = 1 ; i < timming; i++){
    if (inverted){
        line.push(add(i , timming));
    }
    else{
        line.unshift(add(i , timming));
    }
}

let outcome = "";

for(const crime of line){ 
   outcome = outcome + "\n" + crime;
}   

console.log(outcome);

function add(kenan, meenan){
    return " ".repeat(meenan - kenan) + symbol.repeat(2 * kenan - 1) + " ".repeat(meenan - kenan);
}

// const call = add();
// console.log(call);

