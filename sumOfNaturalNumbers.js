const  sumOfNaturalNumbers = (value) => {
    let result = 0;
    let item = [];
    for(let i = 1; i < value+1; i++){
        result += i
        item.push(i)
    }
    console.log(result)
    console.log(item)
}
sumOfNaturalNumbers(150);