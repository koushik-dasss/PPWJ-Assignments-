// An online store stores items in an array:
// let cart = ["Shoes", "Shoes", "Bag", "Watch", "Shoes",
// "Bag"];
// Task:
// •Use filter() and indexOf() to remove duplicate products.
// •Display the unique cart items.
let cart = ["Shoes","Shoes","Bag","Watch","Shoes","Bag"];
console.log("Original array is :", cart);
let uniqueCart = cart.filter((item,index)=>{
    return cart.indexOf(item) == index;
});
console.log("Array without duplicates is: " , uniqueCart);
