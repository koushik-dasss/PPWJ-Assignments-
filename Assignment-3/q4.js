// In a company’s HR system, employee IDs are stored in an array.
// The HR manager wants to remove some employee IDs. However,
// there are two ways to remove data in JavaScript:
// - Using the delete keyword.
// - Using the splice() method.
// Your task is to:
// - Demonstrate the effect of using delete on an employee array.
// - Demonstrate the effect of using splice() on the same array.
// - Clearly show how the length of the array changes in both cases.
let IDs = ["EMP001", "EMP002","EMP003","EMP004","EMP005","EMP006"];
delete IDs[2]; // removes the element of the array which is at index 2 
console.log(IDs); // removes the element and replaces the element with an empty item i.e. <1 empty item> 
console.log(IDs.length); // length is as usual 6 , delete removes the element but doesnt reindex or change the length of the array 
console.log(IDs[2]); // undefined , the empty item is technically undefined although the index is present in the array 
console.log(2 in IDs); // false , because the empty item(undefined) makes the index also not a definitive index of the array
console.log(typeof IDs[2]); // typeof empty item is undefined [type of undefined element is always undefined ]


IDs = ["EMP001", "EMP002","EMP003","EMP004","EMP005","EMP006"];
IDs.splice(2,3); // delete 3 elements starting from the 2nd index of the array 
console.log(IDs); // change in the elements of the array 
console.log(IDs.length); // change in the length of the array


// splice also can be used to add elements in an array as well as replace elements in an array which is done when both removal and addition of elements are done at the same time 

IDs = ["EMP001", "EMP002","EMP003","EMP004","EMP005","EMP006"];
IDs.splice(2,3,"EMP007","EMP008");
console.log(IDs); // 3 elements deleted and added by 2 more elements , 3+2=5
console.log(IDs.length); // 5 






 




