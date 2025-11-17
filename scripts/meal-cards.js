const cardImg = document.getElementById('meal-card');
const drawnCardsDiv = document.getElementById('drawn-cards');
const instructions = document.getElementById('instructions');

const numberOfCards = 30;
let cardBack = true;
let drawnCards = [];

cardImg.addEventListener("click", target => {
    if (cardBack) {
        let cardNumber = Math.floor(Math.random() * numberOfCards + 1);
        let dayNumber = Math.floor(Math.random() * 7);
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
            const drawnCardDay = document.createElement('img');
            const cardAndDay = document.createElement('div');
            drawnCardImg.src = `/img/meal-cards/meal-card-${cardNumber}.jpg`;
            drawnCardDay.src = `/img/days/${days[dayNumber]}.png`;
            drawnCardImg.classList.add("card");
            drawnCardDay.classList.add("day");
            cardAndDay.classList.add("card-and-day");
            cardAndDay.appendChild(drawnCardImg);
            cardAndDay.appendChild(drawnCardDay);
            drawnCardsDiv.appendChild(cardAndDay);
        }
        if (drawnCards.length > 0) {
            instructions.innerText = 'Click again for another recipe.';
        }
        if (drawnCards.length > 1) {
            instructions.innerText = 'Click the day to cycle through the week.'
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
    if (target.target.classList.contains("card")) {
        cardImg.src = target.target.src;
        cardBack = false;
    }
    if (target.target.classList.contains("day")) {
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        const day = target.target.src.split('/').pop().replace('.png', '');
        let nextDay = days[days.indexOf(day) + 1];
        if (!nextDay) {
            nextDay = 'mon';
        }
        target.target.src = `/img/days/${nextDay}.png`;
    }
})