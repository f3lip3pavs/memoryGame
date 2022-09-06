const GAMEBOARD = document.querySelector("#gameBoard");
const GAMEOVER = document.querySelector('#gameOver');
const PLAY = document.querySelector('#play');


window.addEventListener('DOMContentLoaded', createCards);

let cards = [
    {name: 'onePiece', img: './assets/one_piece.png', flip: false},
    {name: 'berserk', img: './assets/berserk.png', flip: false},
    {name: 'bleach', img: './assets/bleach.png', flip: false},
    {name: 'cdz', img: './assets/cdz.jpg', flip: false},
    {name: 'deathNote', img: './assets/death_note.jpg', flip: false},
    {name: 'elfenLied', img: './assets/elfen_lied.jpg', flip: false},
    {name: 'fairyTail', img: './assets/fairy_tail.png', flip: false},
    {name: 'forestOfPiano', img: './assets/forest-of-piano.jpg', flip: false},
    {name: 'naruto', img: './assets/naruto.png', flip: false},
    {name: 'tensura', img: './assets/tensura.png', flip: false}
];

function createCards(){ //opçao 1 - transformar creatCards em um objeto

    let indexId = 1;
    let loop = false
    let divCardsCollection = [];

    do{// make the for loop repeat twice
        
        shufle();
        
        for(let index in cards){
            let divCards = document.createElement('div');
            divCards.id = indexId;
            divCards.classList.add('cards');
            GAMEBOARD.appendChild(divCards);

            let divCardFront = document.createElement('div');
            divCardFront.classList.add('card-front');
            divCardFront.setAttribute("data-anime", shufledCards[index].name);
            divCards.appendChild(divCardFront);

            let img = document.createElement('img');
            img.src = shufledCards[index].img;
            img.classList.add('icon');
            img.alt = shufledCards[index].name;
            divCardFront.appendChild(img);

            let divCardBack = document.createElement('div');
            divCardBack.classList.add('card-back');
            divCardBack.textContent = '憶'
            divCards.appendChild(divCardBack);

            divCards.addEventListener('click', flipped);
            divCards.addEventListener('click', CheckingCards);

            indexId++

        }
        loop = !loop
    }while(loop == true);

}

function flipped(){
    if(cardsVerication[1] == '')
        this.classList.add("flip"); //this = divCards
}
      
function unlockCards(){
    cardsVerication[0].classList.remove('flip');
    cardsVerication[1].classList.remove('flip');
    cardsVerication[0] = '';
    cardsVerication[1] = '';
}

function winGame(){

    GAMEOVER.style.display = 'flex';  

    PLAY.addEventListener('click', () => {
        GAMEBOARD.innerHTML = ''; 
        createCards();
        GAMEOVER.style.display = 'none';
        win = 0;
    })
    
}

//bug: quanto seleciona repidamente muitas cartas