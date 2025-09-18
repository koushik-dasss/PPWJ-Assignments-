// An online form captures data as strings, but you need to convert
// them:
// 1. Convert 50 into a string.
// 2. Convert ”123” into a number.
// 3. Convert an empty string ”” into a boolean.
let str = "50";
let str2 = String(str);
console.log(str2);
console.log(typeof(str2));
let number_str = "123";
let number = Number(number_str);
console.log(number);
console.log(typeof(number));
let string = "";
let boolean_string = Boolean(string);
console.log(boolean_string);
console.log(typeof(boolean_string));




