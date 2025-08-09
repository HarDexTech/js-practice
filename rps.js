const numUser = parseInt(
  prompt(
    "Input Your Number For the game. 0 for rock, 1 for paper, 2 for scissors:"
  )
);
const num = Math.floor(Math.random() * 3);

console.log(`Player's input: ${numUser}`);
console.log(`Computer input: ${num}`);

if (numUser > 2 || numUser < 0) {
  alert("Invalid Number");
} else {
  if (
    (numUser === 0 && num === 2) ||
    (numUser === 1 && num === 0) ||
    (numUser === 2 && num === 1)
  ) {
    alert("Player Won");
  } else if (numUser === num) {
    alert("Tie");
  } else {
    alert("Computer Won");
  }
}
