//Part 1
const restaurantName = "Your Restaurant Name";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const sales = [320, 410, 290, 505, 480, 620, 710];

//Part 2
function calculateTotal(price, taxRate){
    return price + (price * taxRate);
}
function applyMemberDiscount(price, isMember){
    if (isMember){
        return price * 0.90;
    }else{
        return price;
    }
}
function checkDelivery(total){
    if (total >= 30){
        console.log(`Order total: $${total} - Free delivery!`);
    }else{
        console.log(`Order total: $${total} - Delivery fee applies.`)
    }
}
function getDayLabel(sales){
    if(sales > 600){
        return "Excellent day";
    }else if(sales > 400){
        return "Good day";
    }else if(sales > 250){
        return "Average day";
    }else{
        return "Slow day";
    }
}

//Part 3
function generateReport(){
    let output = "";
    let total = 0;

    output += `<h2>${restaurantName}</h2>`

    for(let i = 0; i < days.length; i++){
        let dailySales = sales[i];
        let label = getDayLabel(dailySales);

        total += dailySales;

        output += `${days[i]}  &nbsp;&nbsp;&nbsp; $${dailySales} &nbsp;&nbsp;&nbsp; ${label}<br>`;
    }

    let average = total / days.length;

    output += `<br>`;
    output += `Weekly total: $${total.toLocaleString()}<br>`;
    output += `Weekly average: $${average.toFixed(2)}<br>`;

    document.body.innerHTML += output;
}

//Part 4
function generateCustomerOrders(){
    let orderOutput = "";
    orderOutput += `<h2>Customer Orders</h2>`;

    for(let i = 1; i <= 3; i++){
        let orderAmount = Number(prompt(`Enter customer order ${i} amount:`));

        let orderTotal = calculateTotal(orderAmount, 0.08);

        checkDelivery(orderTotal);

        orderOutput += `<p>`;
        orderOutput += `Order ${i}<br>`;
        orderOutput += `Original amount: $${orderAmount.toFixed(2)}<br>`;
        orderOutput += `Total with tax: $${orderTotal.toFixed(2)}<br>`;

        if (orderTotal >= 30){
            orderOutput += `Delivery: Free delivery!`;
        }else{
            orderOutput += `Delivery: Delivery fee applies.`;
        }
        orderOutput += `</p>`;
    }
    document.body.innnerHTML += orderOutput;
}

//Run the Report
generateReport();
generateCustomerOrders();
