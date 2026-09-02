function showRestaurantName() {
    console.log("Welcome to La Cantina");
}
showRestaurantName();

function greetCustomer(name){
    console.log(`Welcome, ${name}! We are happy to have you at La Cantina`);
}

greetCustomer("Maria");
greetCustomer("James");
greetCustomer("Sofia");

function calculateTotal(price, taxRate){
    return price + (price * taxRate);
}

let tacosTotal = calculateTotal(10.00, 0.08);
let enchiladasTotal = calculateTotal(12.5, 0.08);
let aguaTotal = calculateTotal(3.00, 0.08);

console.log(`Tacos al pastor - Total with tax: $${tacosTotal.toFixed(2)}`);
console.log(`Enchiladas verdes - Total with tax: $${enchiladasTotal.toFixed(2)}`);
console.log(`Agua fresca - Total with tax: $${aguaTotal.toFixed(2)}`);

function calculateTip(totalPrice, tipPercentage){
    return totalPrice * tipPercentage;
}

let tacosPrice = 10.00;
let tacosTaxTotal = calculateTotal(tacosPrice, 0.08);
let tacosTip = calculateTip(tacosTaxTotal, 0.15);

console.log(`Dish:Tacos al pastor`);
console.log(`Price: $${tacosPrice.toFixed(2)}`);
console.log(`Total with tax: $${tacosTaxTotal.toFixed(2)}`);
console.log(`Tip (15%): $${tacosTip.toFixed(2)}`);


