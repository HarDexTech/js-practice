function narcissistic(value){
    const armNum = String(value);
    const armNumLength = armNum.length;
    let sum = 0;
    
    for (let i = 0; i < armNumLength; i++) {
        const armNumber = armNum[i];
        sum += armNumber**armNumLength;
    }
    return sum === value
}
console.log(narcissistic(153));