const censorText = (value) =>{   
    value = value.toLowerCase();
    console.log(value.replaceAll('damn', '****').replaceAll('stuff', '*****'));
}
censorText("This is Damn good stuff");
censorText("This damn stuff is damn good");
censorText("This DAMN good STUFF");

const phoneNumber = (str) =>{
    first = str.slice(0,3)
    second = str.slice(3,6)
    third = str.slice(6,10)
    console.log(`(${first}) ${second}-${third}`)
}
phoneNumber("1231231236")

const cleanInput = (string) => {
    string = string.trim();
    console.log(string.replaceAll('!', '').replaceAll('?', '').replace(/ +/, ' '))
}
cleanInput("  Hello!!!       World???  ");