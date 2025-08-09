//capitalize
nameUser = prompt("Your nameUser please:");
nameUser = nameUser.toLowerCase();
nameUserFirstLetter = nameUser.slice(0, 1).toUpperCase();
nameUserChar = nameUser.slice(1, nameUser.length);
console.log("Hello " + nameUserFirstLetter + nameUserChar);