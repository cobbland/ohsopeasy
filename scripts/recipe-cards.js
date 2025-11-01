const cardImg = document.getElementById('recipe-card');
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
        cardImg.src = `/img/recipe-cards/recipe-card-${cardNumber}.jpg`;
        cardBack = false;
        drawnCards.push(cardNumber);
        const drawnCardImg = document.createElement('img');
        drawnCardImg.src = `/img/recipe-cards/recipe-card-${cardNumber}.jpg`
        drawnCardsDiv.appendChild(drawnCardImg);
    } else {
        cardImg.src = `/img/recipe-cards/recipe-card-back.jpg`;
        cardBack = true;
    }
})

drawnCardsDiv.addEventListener("click", target => {
    cardImg.src = target.target.src;
    cardBack = false;
})