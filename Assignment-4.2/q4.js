// A retail shop wants to keep track of its sales performance over a
// week (7 days). The sales amounts are stored in an array. The shop
// manager wants a small program to:
// •Calculate the total weekly sales,
// •Find the average sales per day,
// •Identify the day with the highest sales,
// •Identify the day with the lowest sales.
let sales = [1500,600,4500,1250,2690,300,3500];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let total = 0
for(let i = 0 ; i < sales.length ; i++){
    total+=sales[i]; // total weekly sales
}
let avg = total/sales.length ; // avg. sales per day
let max = sales[0], min = sales[0];
for(let i = 0 ; i< sales.length;i++){
    if(sales[i]>max){
        max = sales[i]; // max. sales day's value
    }
    if(sales[i]<min){
        min = sales[i]; // min. sales day's value 
    }
}
let highest_sales_day = days[sales.indexOf(max)];
let lowest_sales_day = days[sales.indexOf(min)];
console.log("The total weekly sales is :"+ total);
console.log("The avg. sales per day is " + avg);
console.log("The day with the highest sales is :"+  highest_sales_day);
console.log("The day with the lowest sales is :"+ lowest_sales_day);



