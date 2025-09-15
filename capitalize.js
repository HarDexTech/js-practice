//capitalize
nameUser = prompt("Your nameUser please:");
nameUser = nameUser.toLowerCase();
nameUserFirstLetter = nameUser.slice(0, 1).toUpperCase();
nameUserChar = nameUser.slice(1, nameUser.length);
console.log("Hello " + nameUserFirstLetter + nameUserChar);

function capitalize() {
    let str = prompt('Please enter text:');
    let splittedstr = str.split(' ');
    let capitalizedstr = [];
    for (let i = 0; i < splittedstr.length; i++) {
        capitalizedstr.push((splittedstr[i].charAt(0).toUpperCase()) + splittedstr[i].slice(1, splittedstr.length));
    }
    capitalizedstr = capitalizedstr.join(' ');
    console.log(capitalizedstr)
}
capitalize();