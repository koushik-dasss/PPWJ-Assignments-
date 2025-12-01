// You are designing an online shopping cart system. Write a function
// calculateTotal(cart, discount = 0) where cart is an array of
// item prices. The function should:
// •Use the rest parameter to handle multiple item prices.
// •Apply a discount if provided (default is 0%).
// •Return the final bill amount.
function calculateTotal(discount = 0 , ...cart){
    let total = 0;
    for(let price of cart){
        total+=price;
    }
    let finalPrice = total-(total*(discount/100));
    return finalPrice;
}
console.log("The final price is " + calculateTotal(10,200,300,450));

