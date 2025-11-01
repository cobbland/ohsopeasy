const cardImg = document.getElementById('meal-card');
const drawnCardsDiv = document.getElementById('drawn-cards');


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
        const drawnCardImg = document.createElement('img');
        drawnCardImg.src = `/img/meal-cards/meal-card-${cardNumber}.jpg`
        drawnCardsDiv.appendChild(drawnCardImg);
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