var play = prompt("yes or no");

while (play === "yes") {
  const firstValue = parseInt(prompt("Enter First Value:"));
  const secondValue = parseInt(prompt("Enter Second Value:"));
  const operator = prompt("Enter Operator(+, -, /, ^, *):");

  if (operator === "+") {
    alert(firstValue + secondValue);
  } else if (operator === "-") {
    alert(firstValue - secondValue);
  } else if (operator === "*") {
    alert(firstValue * secondValue);
  } else if (operator === "/") {
    alert(firstValue / secondValue);
  } else if (operator === "^") {
    alert(firstValue ** secondValue);
  } else {
    alert("Invalid");
  }

  var play = prompt("yes or no");
}

console.log("goodbye");
