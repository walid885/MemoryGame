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
const cardChosen = []
const cardchosenId = []
function createBoard(){
    for (let i=0 ; i<12; i++ ){
        const card =  document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('dataId', i)
        grid.appendChild(card);
        card.addEventListener('click',flipCard)
    }
}

createBoard()
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

function CheckMatch(){
    const cards = document.querySelectorAll('img')
      console.log("check for match");
      if(cardChosen[0] == cardChosen[1]){
          alert("you did it son of a bitch !"); 
        cards[cardchosenId[0]].setAttribute('src','images/white.png')
        cards[cardchosenId[1]].setAttribute('src','images/white.png')

    }
  }