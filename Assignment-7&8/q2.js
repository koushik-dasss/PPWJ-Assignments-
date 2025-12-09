// A company is building a feedback form where users submit their
// name and feedback through a URL. One user, named ”John &
// Sons”, is facing errors because of the & symbol in the URL.
// Task:
// •Use encodeURIComponent() to fix this issue.
// •Decode it back and display the original input.
let name = "John & Sons";
console.log("The original input is : "+ name);
let encode = encodeURIComponent(name);
console.log(name + " is encoded into "+ encode);
let decode = decodeURIComponent(encode);
console.log(encode + " is decoded back into "+ decode);
