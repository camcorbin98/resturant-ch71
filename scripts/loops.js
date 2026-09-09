// Session 4 - For Loops

////document.write("<p> 2 x 1 = 2</p>")
//document.write("<p> 2 x 2 = 4</p>")
//document.write("<p> 2 x 3 = 6</p>")
//document.write("<p> 2 x 4 = 8</p>")
//document.write("<p> 2 x 5 = 10</p>")
//document.write("<p> 2 x 6 = 12</p>")
//document.write("<p> 2 x 7 = 14</p>")
//document.write("<p> 2 x 8 = 16</p>")
//document.write("<p> 2 x 9 = 18</p>")
//document.write("<p> 2 x 10 = 20</p>")

const NUM = 2
for(let i=0; i<=10; i++){
    document.write(`<p> ${NUM} x ${i} = ${i*NUM} </p>`)
}



//Anatomy of a Loop
// for(start ; condition ; increment){
 //       i=2       i < 10       i++  
//} start at 1;
//before each repetition: is i < 10? if yes, run. if not, stop
//after each repetition: i++ adds 1 to i


// Different increment
//Count by 1;
for (let i=0; i<5; i += 2){
    console.log(i); // 0, 2, 4
}

///Counts by 5;
for (let i=0; i <=20; i+=5){
    console.log(i);
}

//Challenge 1: warm-up
//write a for lopp that prints the multipication table of 5
//from 1 to 10 using console.log

for (let i=1; i <=10; i++){
    console.log(5 * i);
}


//Arrays
let temp1 = 30;
let temp2 = 45;
let temp3 = 60;



//           0         1         2       3
let temps = [30, 45, 60, 50]
console.log(temps[2]);
console.log(temps[0]);

for (let i=0; i < temps.length; i++){
    console.log("Day" + (i + 1) + ":" + temps[i] + "C");
}

///temps.length = 4 - always use

//The accumulator pattern
// How to calculate a total and average from an array
let total = 0; //start at zero BEFORE the loop
for (let i=0; i < temps.length; i++){
    total = total + temps[i];
}
console.log(total);
let average = total / temps.length;//Calculate AFTER the Loop
console.log(average);

// Two parallel arrays
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const SALES = [320, 410, 290, 505, 480, 620, 710]

//days[0] = "Monday" and sales[0] = 320 - they go together

if (DAYS.length == SALES.length){
    for(let i=0; i < DAYS.length; i++){
        console.log(DAYS[i] + ": $" + SALES[i]);
    }
}

//Challenge 2 Array and accumulator
//Given the array of menu prices:
//      const prices = [12.50, 8.00, 15.75, 6.25, 20.00];
//Use a loop to calculate and print the total and the average price.
//Use toFixed(2) for the output


//Challenge 3 - Loop + If
//using the sales and days arrays, write a loop that prints only the days
//where sales were above 400. Skip the rest

for (let i=0; i < DAYS.length; i++){

    if (SALES[i] > 400){

        console.log(DAYS[i]);

    }

}

for(let i=0; i < DAYS.length; i++){
    if (SALES[i] > 400){
        console.log(DAYS[i]);
    }
}


// Building output for the page
let output = "";

for(let i=0; i < DAYS.length; i++){
    output += `<p> ${DAYS[i]}: $${SALES[i]} </p><br/>`
}

document.getElementById("sales").innerHTML = output;








