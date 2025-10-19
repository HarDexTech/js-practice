function storageSense(value, space) {
    value = value.toLowerCase();
    space = space.toLowerCase();
    let firstValue = 0;
    let firstSpace = 0;
    for (let index = 0; index < value.length; index++) {
        if (typeof value[index] === "string") {
            firstValue = value.slice(0, index - 1);
        }
    }

    for (let i = 0; i < space.length; i++) {
        if (typeof space[i] === "string") {
            firstSpace = space.slice(0, i - 1);
        }
    }

    if (value.endsWith(`kb`)) {
        valueB = Number(firstValue) * 1024;
    }
    else if (value.endsWith(`mb`)) {
        valueB = Number(firstValue) * (1024**2)
    }
    else if (value.endsWith(`gb`)) {
        valueB = Number(firstValue) * console.log(1024**3);
    }
    else if (value.slice(-1) === `b`) {
        valueB = Number(firstValue);
    }
    // if (value.slice(-2) === `kb`) {
    //     valueB = Number(firstValue) * 10 ** 3;
    // }
    // else if (value.slice(-2) === `mb`) {
    //     valueB = Number(firstValue) * 10 ** 6;
    // }
    // else if (value.slice(-2) === `gb`) {
    //     valueB = Number(firstValue) * 10 ** 9;
    // }
    // else if (value.slice(-1) === `b`) {
    //     valueB = Number(firstValue);
    // }
    else {
        valueB = `Invalid`
    }

    if (space.slice(-2) === `kb`) {
        spaceB = Number(firstSpace) * 10 ** 3;
    }
    else if (space.slice(-2) === `mb`) {
        spaceB = Number(firstSpace) * 10 ** 6;
    }
    else if (space.slice(-2) === `gb`) {
        spaceB = Number(firstSpace) * 10 ** 9;
    }
    else if (space.slice(-1) === `b`) {
        spaceB = Number(firstSpace);
    }
    else {
        spaceB = `Invalid`
    }
    if (valueB <= spaceB && typeof spaceB === "number" && typeof valueB === "number") {
        amount = spaceB / valueB;
        (amount > 1) ? no = `Files` : no = `File`
        console.log(`Your system will take ${Math.floor(amount)} ${no}`)
    }
    else {
        console.log(`Invalid input`)
    }
}
storageSense(`500mb`, `256Gb`);