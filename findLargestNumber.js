let arr = [147, 75, 221, 233, 77, 17, 135, 189, 147, 218];
let firstLargest = arr[0];

for (let index = 1; index < arr.length; index++) {
    if(arr[index] > firstLargest){
        firstLargest = arr[index]
        console.log(`${firstLargest} is the largest`)
    }
}
// or by using math.max
let largest = Math.max(...arr);
console.log(`Largest number is ${largest}`)