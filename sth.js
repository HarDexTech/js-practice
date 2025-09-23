let count = 0;
let item = 0;
let tie = 0;
for (let index = 0; index < 10; index++) {
        const computer = Math.floor(Math.random() * 5);
    const computer2 = Math.floor(Math.random() * 5);

    console.log(`Computer played ${computer}`);
    console.log(`Computer2 played ${computer2}`);

    if (computer2 === computer) {
        tie++;
        console.log("Tie");
        console.log(`Score is Player one: ${count}, Player two: ${item}, Tie: ${tie}`)
    } else if (computer > computer2) {
        count++;
        console.log(`Player one wins`);
        console.log(`Score is Player one: ${count}, Player two: ${item}, Tie: ${tie}`)
    } else if (computer2 > computer) {
        item++;
        console.log(`Player two wins`);
        console.log(`Score is Player one: ${count}, Player two: ${item}, Tie: ${tie}`)
    } else {
        console.log("Try Again");
    }
}
if(count > item && count > tie){
    console.log(`Player one wins`)
}
else if(item > count && item > tie){
    console.log(`Player two wins`)
}
else(
    console.log(`It's a tie`)
)