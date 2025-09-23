function camelCase(value) {
    value = value.split('');
    let result = [];
    for (let index = 0; index < value.length; index++) {
        result.push(value[index])
    }
    joinedreturn = result.join('');
    joinedreturn = joinedreturn.split(' ');

    let capitalizedstr = [];
    for (let i = 0; i < joinedreturn.length; i++) {
        if (i === 0) {
            capitalizedstr.push((joinedreturn[0].charAt(0).toLowerCase()) + joinedreturn[0].slice(1));
        }
        else{
            capitalizedstr.push((joinedreturn[i].charAt(0).toUpperCase()) + joinedreturn[i].slice(1));
        }
    }
    capitalizedstr = capitalizedstr.join('');
    console.log(`'${capitalizedstr}'`);
}
camelCase(`large rock fragments`)