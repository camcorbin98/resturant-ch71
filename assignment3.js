// Part 1
function checkDelivery(orderTotal){
    if (orderTotal >= 30){
        console.log(`Order total: $${orderTotal} - Free delivery!`);
    }else{
        console.log(`Order total: $${orderTotal} - Delivery fee applies.`);
    }
}
checkDelivery(35);
checkDelivery(22);
checkDelivery(30);

// Part 2
function getMenuType(hour){
    if (hour >= 7 && hour <= 11){
        console.log(`Hour ${hour}: Breakfast menu`);
    }else if (hour >= 12 && hour <= 16){
        console.log(`Hour ${hour}: Lunch menu`);
    }else if (hour >= 17 && hour <=22){
        console.log(`Hour ${hour}: Dinner menu`);
    }
    else{
        console.log(`Hour ${hour}: We are closed`);
    }
}   
getMenuType(8);
getMenuType(13);
getMenuType(19);
getMenuType(2);

// Part 3
function applyMemberDiscount(price, isMember){
    if(isMember){
        return price * 0.90;
    }else{
        return price;
    }
}
let memberPrice = applyMemberDiscount(20, true);
let regularPrice = applyMemberDiscount(20, false);

console.log(`Member price: $${memberPrice.toFixed(2)}`);
console.log(`Regular price: $${regularPrice.toFixed(2)}`);

//Part 4
function calculateTotal(price, taxRate){
    return price + (price * taxRate);
}

function printOrderSummary(dishName, price, isMember){
    let totalWithTax = calculateTotal(price, 0.08);
    let finalPrice = applyMemberDiscount(totalWithTax, isMember);

    console.log("");
    console.log("Order Summary");
    console.log(`Dish: ${dishName}`);
    console.log(`Original price: $${price.toFixed(2)}`);
    console.log(`Total with tax: $${totalWithTax.toFixed(2)}`);

    if(isMember){
        console.log(`Member discount applied: $${finalPrice.toFixed(2)}`);
    }else{
        console.log(`No discount applied: $${finalPrice.toFixed(2)}`);
    }
    checkDelivery(finalPrice);
}

printOrderSummary("Tacos al pastor", 10, true);
printOrderSummary("Enchiladas verdes", 18, false);

