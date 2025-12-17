let anotherObject = {};
anotherObject.age = 30;
anotherObject.city = 'New York';

let myObject = {
  name: 'John',
  year: 2007,
  city: 'Lagos',
  job: 'teacher',
  friends: ['ayo', 'ade'],
  hasDriversLicense: true,
  object2: anotherObject,
  welcome: () => {
    console.log('Welcome to the community!');
  },
  greet: function (str = 'ay') {
    console.log(`hi ${str}`);
  },
  getAge: function () {
    this.age = 2025 - this.year;
    return this.age;
  },
};

// const char = prompt('Enter:');
// console.log(myObject[char]);
// console.log(anotherObject);
// console.log(myObject.welcome());
// console.log(myObject.greet());
// console.log(`${myObject.name} has ${myObject.friends.length} friends and his best friend is ${myObject.friends[0]}`);
// console.log(myObject);
// console.log(myObject.getAge());

console.log(
  `${myObject.name} is a ${myObject.getAge()}-year old ${
    myObject.job
  }, and he has a `
);

//BMI Challenge
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(1);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(1);
    return this.bmi;
  },
};

let str =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`;
console.log(str);
