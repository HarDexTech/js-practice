function validateUsername(str) {
    let isBool = true;
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
validateUsername("  John123!@#Dhdh93k9{[fhq-01l4=2k2oe  ");