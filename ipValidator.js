const ipValidator = (address) => {
    let splitAddress = address.split('.');
    if (splitAddress.length !== 4) {
        console.log(false)
    }
    else {
        let result = true
        for (let index = 0; index < splitAddress.length; index++) {
            let num = Number(splitAddress[index]);
            if (num < 0 || num >= 256) { result = false; break }
        }
        console.log(result);
    }
}
//ipValidator('-1.256.256.256');
ipValidator('1.25.01.255');