// Task 1
let purchaseAmount = 120; 
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; 
}

console.log(`Final amount after discount: $${finalAmount}`);
// Task 2
let sales = [120, 85, 200, 150, 90]; 
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; 
}

console.log(`Total Sales: $${totalSales}`);
// Task 3
let stock = 10; // Declare initial stock

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; 
}

console.log("Inventory depleted.");
// Task 4
let responses = 0; 
do {
    responses++; 
    console.log(`Response count: ${responses}`);
} while (responses < 3);

console.log("Survey completed.");
// Task 5
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}
// Task 6
let products = ["Laptop", "Mouse", "Keyboard"]; 

for (let product of products) {
    console.log(`Product: ${product}`);
}
// Task 7
let orders = [101, 102, 103]; 

orders.forEach(order => {
    console.log(`Processing Order ID: ${order}`);
});
// Task 8
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

let tax = calculateTax(200, 15); 
console.log(`Tax: $${tax}`);
// Task 9
const applyDiscount = function(price, discountPercent) {
    return price * (1 - discountPercent / 100);
};

let discountedPrice = applyDiscount(100, 20); 
console.log(`Discounted Price: $${discountedPrice}`);
// Task 10
const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);

let points = calculatePoints(120); 
console.log(`Loyalty Points Earned: ${points}`);
