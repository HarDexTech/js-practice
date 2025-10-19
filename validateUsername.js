'use strict'
function validateUsername(str) {
    let isBool;
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '.', ',', '`', '~', '/', '|', '[', ']', '{', '}', '?', '<', '>', ':', ';'];
    let result = '';
    str = str.toLowerCase().trim().replace(/ +/g, "-").replace(/-+/g, "-");
    for(let i = 0; i < str.length; i++){
        if(symbols.includes(str[i])){
            continue
        }
        else{
            result += str[i]; 
        }
    }
    (result.length > 16 || result.length < 3) ? isBool = false : isBool = true;
    console.log({"valid": isBool,"cleaned": result, "length": result.length});
}
validateUsername("  John1ayomide  ");
validateUsername("  John1ayomideijfidiidimf04m0kjms  ");