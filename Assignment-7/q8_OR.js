// Q8 A banking app needs a 6-digit OTP.
// Task:
// •Use Math.random() with Math.floor() to generate a random
// 6-digit number.
let min = 100000 , max = 999999 ; 
let OTP = Math.floor(Math.random()*(max-min+1))+min; // doing the same range of values method with the  formula only
console.log(OTP);
