//fuction
function user(name, Day = "Day") {
  console.log(`Good ${Day}, ${name}`);
}
user("Ayo", "morning");

function greet(name = "stranger") {
  console.log("Hello " + name);
}
greet();
function makeDrink(drinkName, size = "medium") {
  console.log(`Your ${size} ${drinkName} is ready!`);
}
makeDrink("Coffee", "large");
function orderMeal(food, drink = "water") {
  console.log(`You ordered: ${food.toUpperCase()} with ${drink.toUpperCase()}`);
}
orderMeal("Rice and Stew", "Red Bull");

function makeCoffee(type) {
  console.log(`Making a ${type} coffee`);
}
makeCoffee("latte");
