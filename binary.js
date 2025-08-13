function binary(value) {
  let myNumber = "";

  while (value > 0) {
    const remainder = value % 2;
    if (remainder === 1) {
      myNumber = "1" + myNumber;
    } else {
      myNumber = "0" + myNumber;
    }
    value = Math.floor(value / 2);
  }
  console.log(myNumber);
}
binary(3);