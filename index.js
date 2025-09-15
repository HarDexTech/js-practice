const firstUser = parseInt(prompt("Player one number(Enter only 1 or 0):"));
const secondUser = parseInt(prompt("Player two number(Enter only 1 or 0):"));
const computer = Math.floor(Math.random() * 2);

console.log(`Player one number is ${firstUser} <br>`);
console.log(`Player two number is ${secondUser} <br>`);
console.log(`Computer number is ${computer}`);

if (
  (firstUser !== 0 && firstUser !== 1) ||
  (secondUser !== 0 && secondUser !== 1)
) {
  alert("Invalid Input");
} else {
  if (firstUser === computer && secondUser === computer) {
    alert("Tie");
  } else if (firstUser === computer && secondUser !== computer) {
    alert(`Player one wins`);
  } else if (firstUser !== computer && secondUser === computer) {
    alert(`Player two wins`);
  } else {
    alert("Try Again");
  }
}
