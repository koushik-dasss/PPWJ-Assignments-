// A customer writes feedback: “ThIs prODuct IS AmaZinG!”
// Task:
// •Write a function to format the feedback so that each word starts
// with a capital letter.
let feedback = "ThIs prODuct IS AmaZinG!";
function feedbackFormat(str){
    let words = str.toLowerCase().split(" ");
    let formatted = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formatted.join(" ");
}
console.log(feedbackFormat(feedback));
