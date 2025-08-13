function tribonacci(n) {
    const output = [0, 1, 1];
    if (n === 0) { return []; }
    if (n === 1) { return [0]; }
    else {
        for (let i = 0; i < n; i++) {
            let outLength = output.length;
            output.push(output[outLength - 1] + output[outLength - 2] + output[outLength - 3]);
        }
    }
    return (output.slice(0, n));
}
tribonacci(10);