function fibonacciGenerator(n) {
  var output = [0, 1];

  if (n === 0) {
    return [];
  }
  else if (n === 1) {
    return [0];
  }
  else {
    for (let i = 0; i < n; i++) {
      var arrLength = output.length;
      output.push(output[arrLength - 2] + output[arrLength - 1]);
    }
    return (output.slice(0, n));

  }
}
fibonacciGenerator(8);