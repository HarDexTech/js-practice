/*var x = 10;
do {
//    document.write('hi')
} while (x < 1 || x > 10);

var x = 15;
do {
//    document.write('Welcome');
    x++;
} while (x < 20);

/*var number = 9;
var isPrime = true;

if (number === 1){
    document.write(`${number} is a composite or prime number`);
}
else if(number > 1){
    for (let i = 2; i < number/2; i++) {
        if (number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime == true){
        document.writeln(`${number} is a prime number`);
    }
    else{
        document.writeln(`${number} is not a prime number`)
    }
}*/
/*
number = 10;
index = 1;
for (let i = number; i > 0; i--) {
    index *= i;
}
document.writeln(index)*/

const numberHistory = [];
function saveAsHistory(){
    const randomNumber = Math.floor(Math.random()*10);
    numberHistory.push(randomNumber);
    return numberHistory.slice(-10);
}
document.writeln("Call 1:", saveAsHistory());
document.writeln("Call 2:", saveAsHistory()); 
document.writeln("Call 3:", saveAsHistory());
document.writeln("Call 4:", saveAsHistory());
document.writeln("Call 5:", saveAsHistory());
document.writeln("Call 6:", saveAsHistory());
document.writeln("Call 7:", saveAsHistory());
document.writeln("Call 8:", saveAsHistory());
document.writeln("Call 9:", saveAsHistory());
document.writeln("Call 10:", saveAsHistory());
document.writeln("Call 11:", saveAsHistory());
document.writeln("Call 12:", saveAsHistory());
document.writeln("Call 13:", saveAsHistory());
document.writeln("Call 14:", saveAsHistory());
document.writeln("Call 15:", saveAsHistory());
document.writeln("Call 16:", saveAsHistory());
document.writeln("Call 17:", saveAsHistory());
document.writeln("Call 18:", saveAsHistory());
document.writeln("Call 19:", saveAsHistory());
document.writeln("Call 20:", saveAsHistory());
document.writeln("Call 21:", saveAsHistory());
document.writeln("Call 22:", saveAsHistory());
document.writeln("Call 23:", saveAsHistory());
document.writeln("Call 24:", saveAsHistory());
document.writeln("Call 25:", saveAsHistory());