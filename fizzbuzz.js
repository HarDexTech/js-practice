var output = [];
var count = 1;

function fizzBuzz() {
  while (count < 101) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
    console.log(output);
  }
}
fizzBuzz();

function fizz(){
const numBer = parseInt(prompt("Enter the amount of Fizz Buzz you want to write"));
count = [];

for (let i = 1; i < numBer+1; i++){
    if (i%3 === 0){
        count.push("Fizz")
    }
    else if (i%5 === 0){
        count.push("Buzz")
    }
    else if (i%3 === 0 && i%5===0){
        count.push("Fizz Buzz")
    }
    else{
        count.push(i)
    }
}
console.log(count)
}