const cardImg = document.getElementById('meal-card');
const drawnCardsDiv = document.getElementById('drawn-cards');
const instructions = document.getElementById('instructions');

const numberOfCards = 30;
let cardBack = true;
let drawnCards = [];

cardImg.addEventListener("click", target => {
    if (cardBack) {
        let cardNumber = Math.floor(Math.random() * numberOfCards + 1);
        let whileLoop = true;
        if (drawnCards.length >= numberOfCards) {
            whileLoop = false;
            cardNumber = 'back';
            console.log('That is all the cards!');
        }
        while (drawnCards.includes(cardNumber) && whileLoop) {
            cardNumber = Math.floor(Math.random() * numberOfCards + 1);
        }
        cardImg.src = `/img/meal-cards/meal-card-${cardNumber}.jpg`;
        cardBack = false;
        drawnCards.push(cardNumber);
        if (cardNumber != 'back') {
            const drawnCardImg = document.createElement('img');
            drawnCardImg.src = `/img/meal-cards/meal-card-${cardNumber}.jpg`
            drawnCardsDiv.appendChild(drawnCardImg);
        }
        if (drawnCards.length > 0) {
            instructions.innerText = 'Click again for another recipe.';
        }
        if (drawnCards.length > 4) {
            instructions.innerText = 'Feel like cooking a lot this week, huh?';
        }
        if (drawnCards.length > 6) {
            instructions.innerText = 'There are only seven days in the week, you know.';
        }
        if (drawnCards.length > 14) {
            instructions.innerText = 'Maybe save some for next week?';
        }
        if (drawnCards.length >= numberOfCards) {
            instructions.innerText = "That's it. That's all the recipes. Have fun!";
        }
    } else {
        cardImg.src = `/img/meal-cards/meal-card-back.jpg`;
        cardBack = true;
    }
})

drawnCardsDiv.addEventListener("click", target => {
    if (target.target.src) {
        cardImg.src = target.target.src;
        cardBack = false;
    }
})