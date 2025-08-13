function integral(x){
    squareRoot = Math.sqrt(x);
    if(squareRoot % 1 === 0){
        return true;
    }
    else{return false;}
}

function hf(x){
    return Number.isInteger(Math.sqrt(x));
}