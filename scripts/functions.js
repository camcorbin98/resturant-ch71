console.log("Functions JS");
//1. declare the fn (create the function)
function login(){
    console.log("Welcome to the system")
}

//2. call fn (code, console, user)
login();

//Example 2 Fn with 1 paramerter

function logout(user){

    console.log("Goodbye" + user + "see you later");
}

logout("Noah")
logout("Cameron")
logout("Andy")
logout("Angy")
logout("Isaac")


// Example 3, 2-3 parameters
function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of the exam is: ${correctItems * points}`);
}

gradeExam("Andy",10,1);
gradeExam("Angy",9,1);
gradeExam("Isaac",8,1);

doubleNumber = 7;
console.log(`${doubleNumber*2}`);
console.log(`${doubleNumber*3}`)


//Example 4 return
function add(num1,num2){
    let total = num1 + num2;
    return total;
}

let x = add(5,4);
console.log(`The result is: ${x}`);

let y = add(3,8);
console.log(`The result is: ${y}`);

// Example 5 - using the return value in another calculation
function applyDiscount(price,discountPercent){
    let discount = price * discountPercent;
    return price - discount;
}

function addDeliveryFee(total,fee){
    return total + fee;
}

let originalPrice = 100;
let priceAfterDiscount = applyDiscount(originalPrice,0.10);
let finalPrice = addDeliveryFee(priceAfterDiscount,5);

console.log("Original price: $" + originalPrice);
console.log("After discount $" + priceAfterDiscount.toFixed(2));
console.log("Final with Delivery $" + finalPrice.toFixed(2));


let fName = "Cameron";
let lName = "Corbin";

console.log(fName + lName);

/////combineNames("Alice","Johnson"); ///Should print:Alice Johnson
/////combineNames("Alice");     /////Shouold print:Alice unknown
////combineNames();   /////Should print; unknown unknown


function convertToSeconds(minutes) {
    return minutes * 60;
}

console.log(convertToSeconds(5));


//Example 6 --return vs console.log

// V1: console
function addWrong(num1,num2){
    console.log(num1 + num2);
}

let result1 = addWrong(4,6);
console.log(result1); ///undefined,nothing was returned

//V2:return
function addCorrect(num1,num2){

return num1 + num2;
}
let result2 = addCorrect(4,6);
console.log(result2);  //10

//Global vs local

let globalVar = "I exist everywhere";

function showScope(){
    let localVar = "I only exist inside this fn";
    console.log(globalVar);
    console.log(localVar);

}

showScope();
console.log(globalVar)
//console.log(localVar); --Error localVar does not exist


function calculateTax(price) {
    return price * 1.08;
}

function calculateTip(total) {
    return total * 0.20;
}

let totalWithTax = calculateTax(originalPrice);
let tipAmount = calculateTip(totalWithTax);

console.log("Original price: $" + originalPrice);
console.log("Total with tax: $" + totalWithTax);
console.log("Tip amount: $" + tipAmount);



function rectangleArea(width, height) {
    return width * height;
}

function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}

let width = 5;
let height = 3;

let area = rectangleArea(width, height);
let perimeter = rectanglePerimeter(width, height);

console.log(`Area: ${area}, Perimeter: ${perimeter}`);


function calculatePaycheck(hoursWorked,hourlyRate){
    let gross = hoursWorked * hourlyRate;
    let taxes = gross * 0.20;
    return gross - taxes;
}
let paycheck = calculatePaycheck(40,15);
console.log(`Your paycheck is: $${paycheck}`);

///Challenge 7:Scope problem

let budget = 1000;

function spendMoney(amount){
    let remaining = budget - amount;
    return remaining;
}

console.log(spendMoney(200));
console.log(budget);