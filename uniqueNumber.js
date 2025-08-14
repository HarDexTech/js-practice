function uniqueInOrder(value) {
    let result = [];

    if (typeof value === 'string') {
        let splittedValue = value.split('');
        for (let i = 0; i < splittedValue.length; i++) {
            if (splittedValue[i] === splittedValue[i - 1]) {
                continue
            }
            else {
                result.push(splittedValue[i]);
            }
        }
        return result;
    }
    else {
        let splittedValue = value;
        for (let i = 0; i < splittedValue.length; i++) {
            if (splittedValue[i] === splittedValue[i - 1]) {
                continue
            }
            else {
                result.push(splittedValue[i]);
            }
        }
        return result;
    }
}
uniqueInOrder('AAAABBBCCDAABBB');