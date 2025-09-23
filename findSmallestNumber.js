let numbers = [15, 0, 3, 89, 2, 47, 12, 1];
let small = numbers[0];

for (let i = 1; i < numbers.length;i++){
    if(small > numbers[i]){
        small = numbers[i];
        console.log(`Smallest number is ${small}`)
    }
}

// or by using math.min
let smallest = Math.min(...numbers);
console.log(`Smallest number is ${smallest}`)