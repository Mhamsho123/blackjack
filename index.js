
let yourEl = document.getElementById("your-card")
let houseEl = document.getElementById("house-card")

let firstCard = Math.floor(Math.random()*13)+1;
let secondCard = Math.floor(Math.random()*13)+1;

if(firstCard === 1){
    firstCard = 11;
}
if(secondCard === 1){
    secondCard = 11;
}

let cardList =[firstCard, secondCard];


function startGame(){ 
    yourEl.textContent= cardList;
    
}