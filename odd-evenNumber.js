for (i = 1; i <= 50; i++) {
  if (i === 42) {
    console.log(i);
    break;
  }
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
