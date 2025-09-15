function palindrome() {
  value = prompt("Enter the word you want to check:");
  valued = value.toLowerCase();
  reversed = valued.split("").reverse().join("");
  if (!value) {
    console.log(`No value found`);
  } else if (valued === reversed) {
    console.log(`${value} is a palindrome`);
  } else {
    console.log(`${value} is not a palindrome`);
  }
}
palindrome();
