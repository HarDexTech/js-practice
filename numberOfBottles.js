function beer() {
  var x = 99;
  const y = 99;
  while (x != 0) {
    const z = x - 1;
    var numBottles = "bottles";
    if (x === 1) {
      numBottles = "bottle";
    }
    var rem = "bottles";
    if (z === 1) {
      numBottles = "bottle";
    }
    console.log(
      `${x} ${numBottles} of beers on the wall, ${x} ${numBottles} of beers`
    );
    console.log(
      `Take one down and pass it around, ${z} ${numBottles} of beer on the wall`
    );
    x--;
  }
  console.log(
    `No more ${numBottles} of beers on the wall, no more ${numBottles} of beers`
  );
  console.log(`Go to the store and buy some more, ${y} beers on the wall`);
}
beer();
