// A shopping mall offers discounts based on the total purchase
// amount:
// -Purchases 100 or more →discount of 20
// -Purchases 50 or more (but less than 100) →discount of 10
// -Purchases below 50 →no discount
// Write a JavaScript program to calculate the discount, final price,
// and display the customer’s savings. Analyze and extend the pro-
// gram by handling invalid inputs (e.g., negative purchase amounts)
// and print “Invalid input! Purchase amount cannot be negative."
let totalPurchaseAmount = parseFloat(prompt("Enter the purchase amount : "));
let savings = 0 , discount = 0 , final_price = 0  ; 
if(totalPurchaseAmount<0){
    console.log("Invalid input! Purchase amount cannot be negative.");
}else if(totalPurchaseAmount<50){
    discount = 0 ; 
    final_price = totalPurchaseAmount-discount;
    savings = discount ;
}else if(totalPurchaseAmount<100){
    discount = 10;
    final_price = totalPurchaseAmount-discount;
    savings = discount; 
}else{
    discount = 20;
    final_price = totalPurchaseAmount-discount;
    savings = discount;
}
console.log("The total purchase amount is :"+ totalPurchaseAmount);
console.log("The discount is :"+ discount );
console.log("The customer's saving amount is :"+ savings);
console.log("The final price is :"+ final_price);