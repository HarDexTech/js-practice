       //capitalize
        //nameUser = prompt("Your nameUser please:")
        //nameUser = nameUser.toLowerCase()
        //nameUserFirstLetter = nameUser.slice(0, 1).toUpperCase();
        //nameUserChar = nameUser.slice(1, nameUser.length)
        //console.log("Hello " + nameUserFirstLetter + nameUserChar)

        //fuction
        function user(name, Day='Day'){
            console.log(`Good ${Day}, ${name}`)
        }
        user('Ayo', 'morning');

        function greet(name = "stranger") {
            console.log('Hello ' + name)
        }
        greet();
        function makeDrink(drinkName, size = "medium"){
            console.log(`Your ${size} ${drinkName} is ready!`)
        }
        makeDrink("Coffee", "large");
        function orderMeal(food, drink = "water") {
            console.log(`You ordered: ${food.toUpperCase()} with ${drink.toUpperCase()}`)
        }
        orderMeal("Rice and Stew", "Red Bull");

        function makeCoffee(type){
            console.log(`Making a ${type} coffee`)
        }
        makeCoffee('latte');

        function calcBMI(weight, height){
            x = height// /100;//changes the height from cm to m
            return weight/x**2;
        }
        //Weight in kg, Height in m
        var calculateBMI = calcBMI(65, 1.8).toFixed(1); //toFixed(1) rounds the result to 1 decimal places
        console.log(`Your BMI is ${calculateBMI}`);