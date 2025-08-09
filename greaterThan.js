let myList = [23, 67, 12, 89, 45, 3, 91, 56];
const num = 50;
var count= 0;
for (let i = 1; i < myList.length; i++) {
    if (num < myList[i]) {
        count++
    }
    console.log(`The numbers greater than 50 is ${count}`)
}