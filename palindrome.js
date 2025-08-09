function palindrome() {
  value = prompt("Enter the word you want to check:");
  valued = value.toLowerCase();
  reversed = valued.split("").reverse().join("");
  if (!value) {
    alert(`No value found`);
  } else if (valued === reversed) {
    alert(`${value} is a palindrome`);
  } else {
    alert(`${value} is not a palindrome`);
  }
}
palindrome();
