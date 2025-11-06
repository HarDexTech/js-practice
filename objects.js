let anotherObject = {};
anotherObject.age = 30;
anotherObject.city = "New York";

let myObject = {
    name: "John",
    age: 25,
    city: "Lagos",
    friends: ["ayo", "ade"],
    hasDriversLicense: true,
    object2: anotherObject,
    welcome: () => {
        console.log("Welcome to the community!");
    },
    greet: function(str='ay'){
        console.log(`hi ${str}`)
    }
};

// const char = prompt('Enter:');
// console.log(myObject[char]);
// console.log(anotherObject);
console.log(myObject.welcome());
console.log(myObject.greet('ade'));
// console.log(myObject);
// console.log(`${myObject.name} has ${myObject.friends.length} friends and his best friend is ${myObject.friends[0]}`);