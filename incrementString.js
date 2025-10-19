function incrementString(strng) {
    let number = "";
    let string = "";
    let total = "";
    for (let i = 0; i < strng.length; i++) {
        if (isNaN(strng[i])){
            number = Number(strng.slice(i + 1 - strng.length));
            string = strng.slice(0,i+1);
        }
    }
    number++;
    total = string+number
    if(total.slice(-3) === 'NaN'){total = total.replace('NaN', 1)}
    else{total}
    console.log(total)
}
incrementString("foobar2331");
incrementString("foo0042");
incrementString("foo9");
incrementString("foo");