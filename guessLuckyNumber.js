var userName = prompt("Do you want to play(Y for yes, N for no)");

while (userName === "Y") {
  const luckyNumber = [5, 7];
  var guessNumber = Math.floor(Math.random() * 10);

  while (!luckyNumber.includes(guessNumber)) {
    console.log(`${guessNumber} is not it`);
    var guessNumber = Math.floor(Math.random() * 11);
  }
  console.log(`${guessNumber} is my lucky Number`);
  var name = prompt("Do you want to play again(Y for yes, N for no)");
}
console.log("Goodbye");
