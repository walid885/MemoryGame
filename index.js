const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

cardArray.sort(()=>0.5 -Math.random())

const grid = document.querySelector('#grid')
let cardChosen = []
const result = document.getElementById('result')
let cardchosenId = []
const cards1 = []

// creating the board function 

function createBoard(){
    for (let i=0 ; i<12; i++ ){
        const card =  document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('dataId', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card);

    }
}

function CheckMatch(){
    const cards = document.querySelectorAll('img')
    const checkOptionOneId = cardchosenId[0]
    const checkOptionTwoId = cardchosenId[1]
    console.log("check for match")
      if(checkOptionOneId == checkOptionTwoId){
        alert("You have clicked the same Image!"); 

    } else if(cardChosen[0] === cardChosen[1] ) {
        cards[checkOptionOneId].setAttribute('src','images/white.png')
        cards[checkOptionTwoId].setAttribute('src','images/white.png')
        cards[checkOptionOneId].removeEventListener('click',flipCard)
        cards[checkOptionTwoId].removeEventListener('click',flipCard)
        cards1.push(cardChosen)
    
    }else{
        cards[checkOptionOneId].setAttribute('src','images/blank.png')
        cards[checkOptionTwoId].setAttribute('src','images/blank.png')
    }
    result.textContent = cards1.length
    cardChosen = []
    cardchosenId = []
    if(cards1.length === cardArray/2){
        result.innerHTML = 'COngrats you got all of them'
    }
  }

  function flipCard(){
    const cardId = this.getAttribute('dataId')
      cardchosenId.push(cardId)
      console.log(cardChosen);
      console.log(cardchosenId);

    cardChosen.push(cardArray[cardId].name);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(CheckMatch, 500)
    }

}

  createBoard()
