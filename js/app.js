/*
 * Create a list that holds all of your cards
 */
const icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor",
 "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf",
 "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb",];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


 
 const cardContainer = document.querySelector(".deck")
 let openCards = [];
 let matchedCards = [];
 let moves = 0;
 
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
 }

 /*
 *  Make the cards clickable
 */

 function clickable(card){


/*
*   this checks to see if the cards match and what to do if they do
*/

 card.addEventListener("click", function(){
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
 					secondCard.classList.remove("open", "show", "disable");

 					openCards = [];
 				}, 350);
 			}

 	} else {
 		card.classList.add("open", "show");
 		openCards.push(this);
 	}

    addMoves();
 });
 
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
    } else if (moving > 24) {
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
*   Is the game over?
*/

 function over(){
    if (matchedCards.length === icons.length) {
        alert(" moves");
        
    } else {
        console.log("not quite!");
    }
 }



















/*
*
*/


//  var theTimer = (function() {   
//             var timer = setInterval(countTimer, 1000);
//             var totalSeconds = 0;
//             function countTimer(){
//                 ++totalSeconds;
    
//                 var minute = Math.floor((totalSeconds)/60);
//                 var seconds = totalSeconds - (minute*60);

//                 return countTimer()
//             }
        
//     })();

// function getTimer(){
//     document.getElementById('timer').innerHTML = theTimer();
// }



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
