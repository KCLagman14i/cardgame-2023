document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
          name: 'fries',
          img: 'images/fries.png'  
        },

        {
            name: 'pizza',
            img: 'images/pizza.jpg'  
          },
      
          {
            name: 'hotdog',
            img: 'images/hotdog.png'  
          },

          {
            name: 'milk shake',
            img: 'images/milk shake.jpg'  
          },

          {
            name: 'ice cream',
            img: 'images/ice cream.png'  
          },

          {
            name: 'burger.png',
            img: 'images/burger.png'  
          },

          {
            name: 'fries',
            img: 'images/fries.png'  
          },
  
          {
              name: 'pizza',
              img: 'images/pizza.jpg'  
            },
        
            {
              name: 'hotdog',
              img: 'images/hotdog.png'  
            },
  
            {
              name: 'milk shake',
              img: 'images/milk shake.jpg'  
            },
  
            {
              name: 'ice cream',
              img: 'images/ice cream.png'  
            },
  
            {
              name: 'burger.png',
              img: 'images/burger.png'  
            }

    ]
    
    cards.sort(() => 0.5 - Math.random())
    console.log(cards)

  const grid = document.querySelector('.grid')
  /*lastly */ const resultDisplay = document.querySelector('#result')

  /*after carId get store it as an array*/
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []

   /*1st f*/ function createBoard() {
        for(let i = 0; i < cards.length; i++) {
           const card = document.createElement('img')
           card.setAttribute('class', 'favorites')
           card.setAttribute('src', 'images/blank.jpg')
           card.setAttribute('data-id', i)
        /*after creatBoard() give each card --> 2nd f */ card.addEventListener('click', flipCard)
           grid.appendChild(card)
        }
    }

    /*createBoard() after setTimeout move in the end*/

    function flipCard() {
      /*whatever crad flipped*/ 
      let cardId = this.getAttribute('data-id')
      /*console.log(cards[cardId])<--delete after consoling cardsChosen*/                    
                                                        

      cardsChosen.push(cards[cardId].name)
      /*console.log(cardsChosen)<--delete console*/
      cardsChosenIds.push([cardId])
      this.setAttribute('src', cards[cardId].img)
      if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500) /*<-- 3rd f */
      }

      console.log(cardsChosenIds)
    }

    function checkForMatch() {
      const cardArray = document.querySelectorAll('img')
      const optionOneId = cardsChosenIds[0]
      const optionTwoId = cardsChosenIds[1]
        if(optionOneId == optionTwoId){
          alert('You have clicked the image!')
          cardArray[optionOneId].setAttribute('src', 'images/blank.png')
          cardArray[optionTwoId].setAttribute('src', 'images/blank.png')
        } else if(cardsChosen[0] === cardsChosen[1]) {
          alert('You have found a match')
          cardArray[optionOneId].setAttribute('src', 'images/white.jpg')
          cardArray[optionTwoId].setAttribute('src', 'images/white.jpg')
          cardArray[optionOneId].removeEventListener('click', flipCard)
          cardArray[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else { /*<-- if you don't find a match*/
          cardArray[optionOneId].setAttribute('src', 'images/blank.png')
          cardArray[optionTwoId].setAttribute('src', 'images/blank.png')
          alert('Sorry try again!')
        }

        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length /*reults*/
        if(cardsWon.length === cards.length/2){
            resultDisplay.textContent = 'You have won!'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }

    createBoard()
})


fetch('https://api.punkapi.com/v2/beers')
.then((response) => response.json())
.then((data) => console.log(data))
