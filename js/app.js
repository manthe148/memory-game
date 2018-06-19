/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 * Create a list that holds all of your cards
 */
 const icons = ["fa fa-diamond",
  "fa fa-diamond",
   "fa fa-paper-plane-o",
    "fa fa-paper-plane-o",
     "fa fa-anchor",
  "fa fa-anchor",
   "fa fa-bolt",
    "fa fa-bolt",
     "fa fa-cube",
      "fa fa-cube",
       "fa fa-leaf",
        "fa fa-leaf",
  "fa fa-bicycle",
   "fa fa-bicycle",
    "fa fa-bomb",
     "fa fa-bomb",];


 const cardContainer = document.querySelector(".deck")
 const modalContainer = document.querySelector(".modal")
 let openCards = [];
 let matchedCards = [];
 let firstClick = true;

// Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
    var currentIndex = icons.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = icons[currentIndex];
        icons[currentIndex] = icons[randomIndex];
        icons[randomIndex] = temporaryValue;
    }
    return array;
 }

 /*
 * Call functions!
 */
 shuffle(icons);
 startGame();
 over();

 /*
 *   Creates the cards
 */

function startGame(){

 	for (let i = 0; i < icons.length; i++) {
	   const card = document.createElement('li');
	   card.classList.add("card");
	   card.innerHTML = ` <i class="${icons[i]}"></i>`;
	   cardContainer.appendChild(card);
	   clickable(card);
 	}	

    /*
    *  Make the cards clickable
    */

    function clickable(card){

    /*
    *   this checks to see if the cards match and what to do if they do
    */

        card.addEventListener("click", function(){
            if (firstClick) {
            startTimer();
            firstClick = false;
          }
         	const firstCard = this;
           	const secondCard = openCards[0];
               	if (openCards.length === 1) {
                		card.classList.add("open","show", "disable");
                 		openCards.push("this");
             		if (firstCard.innerHTML === secondCard.innerHTML) {
             			firstCard.classList.add("match");
             			secondCard.classList.add("match");
             			matchedCards.push(firstCard, secondCard);                   
             			openCards = [];    		
                        over();		
             		} else {
             			setTimeout(function(){
                        	firstCard.classList.remove("open", "show", "disable");
                            secondCard.classList.remove("open", "show","disable");
             			    openCards = [];
                		}, 550);
                 	}
             	} else {
             		card.classList.add("open", "show", "disable");
             		openCards.push(this);
             	}
               //Add moves function
                addMoves();
        });
    }
}

 /*
 * This is to count the moves (per click!).
 */
  const moveContainer = document.querySelector('.moves')
  let moving = 0;
    moveContainer.innerHTML = 0;
      function addMoves(){
         moving++;
         moveContainer.innerHTML = moving;
     
       //Calls the Rating function
         rating();
          
      }
 /*
 * Star Rating
 */
  const starContainer = document.querySelector('.stars')
  const star = `<li><i class="fa fa-star"></i></li>`;
    starContainer.innerHTML = star + star + star;
      function rating(){
        if (moving > 30) {
            starContainer.innerHTML = star;
        } else if (moving > 25) {
            starContainer.innerHTML = star + star;
        } else {
            starContainer.innerHTML = star + star + star;
        }
  }
       
 /*
 * Restart the game
 */

 const restart = document.querySelector('.restart')
 restart.addEventListener("click", function(){
    window.location.reload();
 });

/*
*   TIMER OUT-PUT   
*/

 let timeVar;

 function startTimer(){ 
    let timeVar = setInterval(countTimer, 1000);
 }

 function stopTimer(){
    clearInterval(timeVar);
    sec = 0;
    min = 0;
 }

 let totalSec = 0;

 function countTimer() {
    ++totalSec;
    var hour = Math.floor(totalSec /3600);
    var min = Math.floor((totalSec - hour*3600)/60);
    var sec = totalSec - (hour*3600 + min*60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (sec >= 60) {
        min++;
        sec = "00";
    }
    document.querySelector('.timer').innerHTML = min + ":" + sec;
 }

 /*
 *   Is the game over?
 */

 function over(){
    // for ( var i = matchedCards.length; i < icons.length; i++) {
    //     stopTimer();
    //     display();
    // }
    if (matchedCards.length === icons.length) {
       
       console.log("alert!!!");
       stopTimer();
      
      display();
      
    }
 }

 function display(){

    document.getElementById('modal').style.display = "block";

/*
*   making this easier to read
*/
    let time = document.getElementById('time');
    let timer = document.querySelector('.timer');
    let star = document.getElementById('stars');
    let stars = document.querySelector('.stars');

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    document.getElementById('header').innerHTML = "CONGRATULATIONS OF FINISHING!!";

     time.innerHTML = "you finished in " + timer.innerHTML + "!";
    
     star.innerHTML = stars.innerHTML;
    

 }

 function playAgain(){
    const again = document.querySelector('.again')
    
    again.addEventListener("click", function(){
        window.location.reload();
    })
 }