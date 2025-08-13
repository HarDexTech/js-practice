//BMI Calculator
function calcBMI(weight, height) {
  x = height / 100; //changes the height from cm to m
  return weight / x ** 2;
}
//Weight in kg, Height in m
var calculateBMI = calcBMI(65, 100).toFixed(1); //toFixed(1) rounds the result to 1 decimal places
console.log(`Your BMI is ${calculateBMI}`);
