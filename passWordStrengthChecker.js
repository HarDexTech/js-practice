// const passWord = prompt("Enter password to check:");
const passWord = 'Adesina';
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

// const password = prompt('Enter password to check:');
const password = 'ayomide';
let len = false;
let isUpper = false;
let isLower = false;
let hasSymbols = false;
let hasNum = false;
if (password.match(/[0-9]/)) {
    hasNum = true;
}
if (password.match(/[A-Z]/)) {
    isUpper = true;
}
if (password.match(/[a-z]/)) {
    isLower = true;
}
if (password.match(/[^a-zA-Z0-9]/g)) {
    hasSymbols = true;
}
if (password.length >= 8) {
    len = true;
}

if (isLower && hasNum && isUpper && hasSymbols && len)
    console.log('password is strong')
if (len === false)
    console.log('character is less than 8')
if (hasSymbols === false)
    console.log('include symbols')
if (isUpper === false)
    console.log('include uppercase characters')
if (hasNum === false)
    console.log('include numbers')
if (isLower === false)
    console.log('include lower-case characters')