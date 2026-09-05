console.log("Conditionals");

//if-statement condition (y/n)
// ---SYNTAX---
//if(condition){
//code to be run if the condition is true
//}

let result = 61;

// >< == !
if(result > 60){
    console.log("You passed the course");
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true because checks values
// case 3: 5 === "5" -> false because checks value and datatype

//if-else statement
// ---SYNTAX ---
// if(condition){
//code to be run if the condition is true
//}else{
//code to be run if the condition is false
//}

let points = 10;
if (points > 60){
    console.log("You won!");
}else{
    console.log("You lose!");
}

let temp = 99
if (temp >= 100){
    console.log("Water is boiling!");
}else{
    console.log("Turn the temperature up!");
}

// else-if condition
// --- SYNTAX ---
// if(condition){
//code to be run if the condition is true
//}else if(condition2){
//code to be run if the condition2 is true
//else{
//code to be run if the conditions are false
//}

let age = 63;
if(age < 13){
    console.log("You are a child");
}else if (age < 21){
    console.log("You are a teenager");
}else if (age < 64){
    console.log("You are an adult");
}
else if (age < 120){
    console.log("You are a senior");
}else{
    console.error("Error!!!! it is not valid");
}

function calculateTicketPrice() {
    let age = 15;
    let ticketPrice;

    if (age < 12) {
        ticketPrice = 5;
    } else if (age < 18) {
        ticketPrice = 8;
    } else {
        ticketPrice = 10;
    }

    console.log(`Your ticket price is $${ticketPrice}`);
}

calculateTicketPrice();



function getOutfit(temperature) {

    if (temperature < 15) {

        return "Wear a jacket";

    } else if (temperature < 25) {

        return "Wear a sweater";

    } else {

        return "Wear a t-shirt";

    }

}

 

let temperature = Number(prompt("Enter the temperature"));

console.log(getOutfit(temp));

// -- && and || operators
// && = AND - both conditions must be true
// || = OR - at least one condition must be true

let hour = 14;

if(hour >= 12 && hour <= 16){
    console.log("Lunch time!");
}


let isWeekend = true;
let isHolliday = false;

if(isWeekend || isHoliday){
    console.log("Resturant is closed today")
}else{
    console.log("Resturant is open")
}

// ----Boolean parameter---
function getGreeting(isVIP){
    if(isVIP)
        return "Welcome back valued member";
    else{
        return "Welcome, consider joining our membership";
    }
}

console.log(getGreeting(true));
console.log(getGreeting(false));

let userType = "Admin";

if (userType === "Admin") {
    console.log("Full access");
    document.write("Welcome admin.");
} else if (userType === "Editor") {
    console.log("Access but limited actions");
    document.write("Welcome editor.");
} else {
    console.log("You do not have access");
    document.write("Error!");
}

function getDiscount(totalAmount) {

    if (totalAmount > 50) {

        return .15;

    } else if (totalAmount > 30) {

        return .1;

    } else if (totalAmount > 15) {

        return .05

    }

    return 0;

}

function calculateDiscount(total, discount) {

    return total - (total * discount);

}   

let price = 60;

let discount = getDiscount(price);

let total = calculateDiscount(price, discount);

console.log(`Total after discount ${discount * 100}% is $${total}`);





