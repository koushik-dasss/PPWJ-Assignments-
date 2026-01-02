// A teacher stores student marks:
// let marks = [45.7, 89.4, 32.6, 50.5];
// Task:
// •Use Math.round() to round each mark.
// •Use Math.ceil() to always round up.
let marks =[45.7,89.4,32.6,50.5];
let rounded = marks.map(m => Math.round(m)); // if .5 or > .5 value is there in decimal , then it rounds upto the next number or else if < .5 , then the below number.
console.log("Rounded :" , rounded); 
let ceiled = marks.map(m => Math.ceil(m)); // whatever is the decimal value , the next number (above ceil value) is taken (next number by default)
console.log("Ceiled :" , ceiled);

// NOT ASKED IN QS. 
let floored = marks.map(m => Math.floor(m)); // floor => below values (current number only)
console.log("Floored : " , floored);



