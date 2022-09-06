let shufledCards = [];
let cardsVerication = ['', ''];
let win = 0;

function shufle(){//make an array of numbers that does not repeat

    let maxNum = cards.length;
    let randomNums = [];
    randomNums[10] = 'reference';
    let index = 0;

    while(randomNums[9] == null){
        randomPosition = Math.floor(Math.random() * maxNum);
        let key = true;

        for(i=0; i<=cards.length; i++){
            
            if(randomNums[i] == 'reference'){
                key = true;
            }else if(randomNums[i] == randomPosition){
                key = false;
                break;
            }
        }

        if(key == true){
            randomNums[index] = randomPosition;
            index++;
        }
    }

    for(index in cards){
        shufledCards[index] = cards[randomNums[index]];  
    }

    return shufledCards;
}

function CheckingCards(){

    
    metchCards(this);

    if(cardsVerication[1] != ''){
        if(cardsVerication[0].firstElementChild.dataset.anime == cardsVerication[1].firstElementChild.dataset.anime){
            win++;
            cardsVerication[0] = '';
            cardsVerication[1] = '';
        }else{
            setTimeout(() => {
                unlockCards()
            }, 1000);
        }
    }  
    
    if(win == 10){
        winGame();
    }
}

function metchCards(card){

        if(cardsVerication[1] == ''){
            if(cardsVerication[0] === ''){
                cardsVerication[0] = card;
            }else{
                cardsVerication[1] = card;
            }
        }
    
    return cardsVerication;
}