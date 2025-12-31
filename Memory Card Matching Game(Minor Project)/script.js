const cards = document.querySelectorAll(".card");
const attemptsE1 = document.getElementById("attempts");
const messageE1 = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
let selectedCards = [];
let attempts = 0;
let matchedPairs = 0;
function shuffleCards(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
        card.classList.remove("flipped", "matched");
        card.innerHTML = "";
    });
}
cards.forEach(card => {
    card.addEventListener('click', () => {
        if(selectedCards.length < 2 && !card.classList.contains("flipped")) {
            card.classList.add("flipped");
            card.innerHTML = card.dataset.value;
            selectedCards.push(card);
            if(selectedCards.length === 2){
                checkMatch();
            }
        }
    });
});
function checkMatch(){
    attempts++;
    attemptsE1.innerHTML = "Attempts: " + attempts;
    let [card1, card2] = selectedCards;
    if(card1.dataset.value === card2.dataset.value){
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        selectedCards = [];
        if(matchedPairs === cards.length / 2){
            messageE1.innerHTML = "Congratulations! All pairs matched.";
        }
    } 
    else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.innerHTML = "";
            card2.innerHTML = "";
            selectedCards = [];
        }, 1000);
    }
}
resetBtn.addEventListener("click", () => {
    selectedCards = [];
    attempts = 0;
    matchedPairs = 0;
    attemptsE1.innerHTML = "Attempts: 0";
    messageE1.innerHTML = "";
    shuffleCards();
});