// A leap year is a year that has 366 days instead of the usual 365
// days. The extra day comes in February (29 days instead of 28).
// The rules for deciding a leap year are:
// Years like 2012, 2016, 2020, 2024 are leap years.
// Years like 1900, 2100 are not leap years (divisible by 100 but not
// by 400).
// Years like 2000, 2400 are leap years (divisible by 400).Your program
// should print Year 2012 is a leap year. Use logical and ternary
// operator.
let year = prompt("Enter a year");
if((year%4===0 && year%100!==0)||(year%400===0)){
    console.log(year + " is a leap year.");
}else{
    console.log(year + " is not a leap year.");
    
}