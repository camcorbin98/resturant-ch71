// --- Comments --------
// Commenhts are notes for humans/developers - the browser ignores them
// Use them to explain your code
// console.log(10+2) - this line is commented out, it won't run
/*
This is a multiline comment
Everything between the notation will be commented out
*/

// --- Strings --- (Data Type)
// A string is text. Always wrapped in quotes or double quotes
// To create a variable, we have to:
/*
1.Declare it with a name
2.Initialize it with a value (optional) */

let firstName = "Cameron";
/* Camel Case Notation*/
/* Each word that we add to a name the first letter need to be in upper case.
Escept for the first one */
let thisIsAnExampleForAVariable;
thisIsAnExampleForAVariable = "Example";
let city = "San Diego";

console.log("Hellow World from variables.js");
console.log(city);
console.log(firstName, thisIsAnExampleForAVariable);

// We can update a let variable
firstName = "Steven"
console.log(firstName);

// ------Numbers --------(Data Type)
let age = 25;
console.log(age);

// --------Booleans --------(Data Type)
//A boolean is either true or false----nothing else.
let isStudent = true;
let isLoggedIn = false;
console.log(isStudent);
console.log(isLoggedIn);

// -- Arithmetic Operators -----
let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Sum:" + sum);
console.log("Subrtaction:" + sub);
console.log("Multipication:" + mul);
console.log("Division:" + div);

// Building strings with variables
// Option 1: Concatenation (using +)
console.log("My name isL" + firstName + "and I live in" + city);
// Option 2: Template literals(cleaner - use backticks '')
console.log(`My name is: ${firstName} and I live in ${city}`);

// ---Constants ----------
// const constantName = this value will NEVER change
const DAYSINWEEK = 7;
const PI = 3.14;


console.log(DAYSINWEEK);
console.log(PI);

// --- RULE OF THUMB ------
// USE CONST BY DEFAULT,
//SWITCH TO LET ONLY IF YOU NEED TO CHANGE THE VALUE


// ------ Note about var ------
// You may see "var" in old code or tutorials online.
//It's an older way to declare variables-we don't use it
//Always use let or const

// ----Prompt --------
// prompt() asks the user a question and gives you their answer
// Number() converts strings into number so we can do math with it


let userAge =Number(prompt("How old are you?"));
console.log(userAge + 30);
console.log("================================")

/* Mini Challenge 1: Warm up
Declare three variables using const and let 
that describe your name, your age and whether you are a student.
Print all three to the console in one line using a template literal.*/
let myName = "Cameron";
let myAge = 28;
let student = true;

console.log(`My name is: ${myName} and I am ${myAge} and I am ${student}`);

/* Optional Challenge 2: Prompt + Math
(the prompt)*/
