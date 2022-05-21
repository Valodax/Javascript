let sum = 0
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let dealerEl = document.getElementById('dealer-el');
let dealerSumEl = document.getElementById("dealer-sum");
let hitButton = document.getElementById('hitButton');
let restartButton = document.getElementById('restartButton');
let standButton = document.getElementById('standButton');

cardsEl.style.display = "none";
sumEl.style.display = "none";
restartButton.style.display = "none";
cards = []
hideDealer()
hideButtons()

function newGame() {
    hideDealer()
    restartButton.style.display = "none";
    startButton.style.display = "none";
    hitButton.style.display = "inline";
    standButton.style.display = "inline";
    cardsEl.style.display = "inline";
    sumEl.style.display = "inline";
    newCard()
    cardsEl.textContent = "My Cards: " + display_cards(cards)
    sumEl.textContent = "Sum: " + sum
    check()
    messageEl.textContent = message
}

function display_cards(array) {
    hand = ''
    for (var i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            hand += array[i] + ", ";
        } else {
            hand += array[i] + ".";
        }
    }
    return hand
}

function newCard() {
    if (cards.length == 0) {
        card1 = random();
        card2 = random();
        sum = card1 + card2
        cards.push(card1)
        cards.push(card2)
    } else {
        card = random();
        cards.push(card)
        sum += card;
    }

}

function check() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack! YOU WIN!!! 😁"
        winner()
    } else {
        message = "YOU BUSTED! 😞";
        loser()
    }
}

function winner() {
    hideButtons()
    restartButton.style.display = "inline";
}

function loser() {
    hideButtons()
    restartButton.style.display = "inline";
}

function restart() {
    sum = 0
    cards = []
    newGame()
}

function random() {
    rndInt = Math.floor(Math.random() * 14) + 1
    if (rndInt == 14) {
        rndInt = 1
    }
    return rndInt
}

function stand() {
    dealer_sum = 0;
    dealer_array = [];
    while (dealer_sum < 22) {
        if (dealer_sum <= 17) {
            dealer_card = random();
            dealer_sum += dealer_card;
            dealer_array.push(dealer_card);
            displayDealer()
        } else {
            displayDealer()
            loser();
            break;
        }
    }
    if (dealer_sum > 21) {
        message = "The Dealer Has Busted; YOU WIN!! 😁"
        winner()
        messageEl.textContent = message
    }
    else if (dealer_sum == 21) {
        message = "The Dealer Has Gotten BlackJack; YOU LOSE!! 😞";
        messageEl.textContent = message
    }
    else {
        message = "The Dealer Has Beaten You; YOU LOSE!! 😞";
        messageEl.textContent = message
    }
}

function displayDealer() {
    dealerEl.textContent = "Dealer's Cards: " + display_cards(dealer_array)
    dealerSumEl.textContent = "Dealer's Sum: " + dealer_sum
    dealerEl.style.display = "inline";
    dealerSumEl.style.display = "inline";
}

function hideDealer() {
    dealerSumEl.style.display = "none";
    dealerEl.style.display = "none";
}

function hideButtons() {
    hitButton.style.display = "none";
    standButton.style.display = "none";
}