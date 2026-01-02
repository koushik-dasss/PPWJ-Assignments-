// You are building a chat app that must replace the word “stupid”
// with “”.
// Task:
// •Use replaceAll() to clean the message: “This is stupid, really
// stupid behavior!”
let msg = "This is stupid , really stupid behavior!";
console.log("The actual message is :"+ msg);
let clean = msg.replaceAll("stupid","");
console.log("The clean message is :" + clean);
