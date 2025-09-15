function expnadedForm(value) {
    let result = [];
    value = String(value)
    let splittedvalue = value.split('');
    for (let index = 0; index < value.length; index++) {
        if (splittedvalue[index] === '0') {
            continue
        }
        else {
            if (index >= 0) {
                result.push(splittedvalue[index] * 10 ** (value.length - index - 1));
            }
        }
    }
    return result.join(' + ');
}
expnadedForm(14102);