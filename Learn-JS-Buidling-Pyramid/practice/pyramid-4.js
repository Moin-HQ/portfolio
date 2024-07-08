const anime = '#';
const lane = [];
const number = 10;
let inverted = true;

for(let i = 1; i < number; i++){
    if(inverted){
        lane.push(kerea(i, number));
    }
    else{
        lane.unshift(kerea(i, number));
    }
}

let trivial = '';

for(const red of lane){
    trivial = trivial + "\n" + red;
}

console.log(trivial);

function kerea(kala , bhuna){
 return " ".repeat(bhuna - kala) + anime.repeat(2 * kala - 1) + " ".repeat(bhuna - kala)
}


