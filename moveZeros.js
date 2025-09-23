const moveZero = (value) => {
    let result = [];
    for (let index = 0; index < value.length; index++) {
        if(value[index] !== 0){
            result.push(value[index])
        }
    }
    for (let index = 0; index < value.length; index++) {
        if(value[index] === 0){
            result.push(0)
        }
    }
    return result
}
moveZero([false,1,0,1,2,0,1,3,"a"]);