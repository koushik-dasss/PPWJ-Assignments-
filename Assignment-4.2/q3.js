// Q3 In mathematics, Pascal’s Triangle is a triangular array of numbers
// where each number is the sum of the two numbers directly above
// it. It is widely used in probability, algebra, and combinatorics. As
// part of a mathematical learning application, you are required to
// generate Pascal’s Triangle using nested loops in JavaScript. This
// will help visualize how binomial coefficients are arranged in a tri-
// angular format.
// Write a JavaScript program that:
// 1. Uses nested for loops to generate Pascal’s Triangle.
// 2. Displays Pascal’s Triangle up to 5 rows.
// Example Output (5 rows):
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
let rows  = 5 ; // number of rows 
let pascal = [] ; // stores rows as arrays 
for(let i = 0 ; i< rows ; i++){
    pascal[i] = [] ; // creating current row array 
    for(let j = 0 ; j <=i ; j++){
        if(j===0 || j===i){ // first or last element is 1 
            pascal[i][j] = 1 ;
        }else{ // sum of two values directly above 
            pascal[i][j] = pascal[i-1][j-1]+ pascal[i-1][j];
        }
    }
}
for(let i = 0 ; i< rows ; i++){
    let line = "";// empty string with zero space (to be made the final output)
    for(let j = 0 ; j< pascal[i].length ;j++){
        if(j>0){
            line+=" "; // adding single space before 2nd+ numbers 
        }
        line+=pascal[i][j]; // append the numbers
    }
    console.log(line);
}