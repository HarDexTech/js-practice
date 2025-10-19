const cssToJs = (str) =>{
    str = str.toLowerCase();
    let result = '';
    str = str.replace('-', ' ');
    strng = str.split(' ')
    for (let i = 0; i < strng.length; i++) {
        if(i === 0)
            result+=strng[0].charAt(0).toLowerCase() + strng[0].slice(1);
        else
            result+=strng[i].charAt(0).toUpperCase() + strng[i].slice(1);
    }
    return `Your CSS character in JS is ${result}`
}
console.log(cssToJs('font-size'))
console.log(cssToJs('color'))