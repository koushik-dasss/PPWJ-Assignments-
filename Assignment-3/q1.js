// A grocery store keeps track of item codes in its computer system.
// Currently, the list is stored in an array. The store manager wants
// you to:
// - Add a new item code at the end of the list
// - Remove the first item code from the list
// - Display the updated list of item codes after performing both op-
// erations
let items = [101,102,103,104]; // item codes stored in an array
console.log("Item codes are: " + items); // initial array 
items.push(105); // new item added at the end of the array 
items.shift(); // first element of the array is removed 
console.log("Updated array of item codes are :"+ items); // updated array 


