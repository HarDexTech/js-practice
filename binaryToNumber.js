function binaryArrayToNumber(arr) {
    ;
    let total = 0
    for (let x = 0; x < arr.length; x++) {
        let power = arr.length - 1 - x
        var biNumber = arr[x] * (2 ** power);
        total = total + biNumber;
    }
    return total
}
binaryArrayToNumber([1, 1, 1, 1]);