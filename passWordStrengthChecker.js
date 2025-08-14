const passWord = prompt("Enter password to check:");
const splitPassword = passWord.split('');
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '.', ',', '`', '~', '/', '|', '[', ']', '{', '}', '?', '<', '>', ':', ';'];
let hasNumber = false;
let hasUpper = false;
let hasLower = false;
let hasSymbol = false;
let length = false;

for (let i = 0; i < passWord.length; i++) {
    if (numeric.includes(splitPassword[i])) {
        hasNumber = true;
    }
    if (passWord.length > 8) {
        length = true;
    }
    if (upperAlphabet.includes(splitPassword[i])) {
        hasUpper = true;
    }
    if (lowerAlphabet.includes(splitPassword[i])) {
        hasLower = true;
    }
    if (symbols.includes(splitPassword[i])) {
        hasSymbol = true;
    }

}
if (length === true && hasLower === true && hasNumber === true && hasUpper === true && hasSymbol === true) {
    console.log(`Your password is strong`);
}
else {
    console.log(`This password ain't strong, think of something better`);
}