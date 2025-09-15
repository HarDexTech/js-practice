function generateHashtag(str) {
    if (!str || str.trim() === "") {
        return false;
    }
    else {
        let newStr = str.split(" ");
        let capitalizedstr = [];
        for (let index = 0; index < newStr.length; index++) {
            capitalizedstr.push((newStr[index].charAt(0).toUpperCase()) + newStr[index].slice(1));
        }
        capitalizedstr = capitalizedstr.join('');
        capitalizedstr = `#${capitalizedstr}`;
        if (capitalizedstr.length > 140) {
            return false;
        }
        else {
            return capitalizedstr;
        }
    }
}
generateHashtag(`I am Ayomide`);