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
 let starRating = "3"

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
 restart();
 // score();
 // noDoubles();


 function startGame(){
 	 for (let i = 0; i < icons.length; i++) {
	 	const card = document.createElement('li');
	 	card.classList.add("card");
	 	card.innerHTML = ` <i class="${icons[i]}"></i>`;
	 	cardContainer.appendChild(card);
	 	clickable(card);
 	}	
 }

 
 function clickable(card){

 function over(){
 	if (matchedCards.length === icons.length) {
 		alert(currentMoves + ": moves");
 		
 	} else {
 		console.log("not quite!");
 	}
 }

/*
*   this checks to see if the cards match and what to do if they do
*/

 card.addEventListener("click", function(){
 	const firstCard = this;
 	const secondCard = openCards[0];
 	if (openCards.length === 1) {
 		card.classList.add("open","show");
 		openCards.push("this");
 			if (firstCard.innerHTML === secondCard.innerHTML) {
 				firstCard.classList.add("match");
 				secondCard.classList.add("match");
 				matchedCards.push(firstCard, secondCard);

 				openCards = [];
 				over();
 			} else {
 				setTimeout(function(){
 					firstCard.classList.remove("open", "show");
 					secondCard.classList.remove("open", "show");

 					openCards = [];
 				}, 350);
 			}

 	} else {
 		card.classList.add("open", "show");
 		openCards.push(this);
 	}

    currentMoves();
 });
}

/*
* This is to count the moves (per click!).
*/
var add = (function (){
    var counter = 0;
    return function() {return counter +=1;}
})();

function currentMoves(){
    document.getElementById('moves').innerHTML = add();
}

// function score(){
//     var list = document.getElementsByTagName('stars')
//     if (currentMoves <= 20) {
//         console.log("good job");
//     } else if (currentMoves <= 25)
//         list.removeChild(childNodes[0]);
// }



/*
* disable double clicks
*/
function noDoubles(){
    document.getElementsByTagName('card').removeEventListener("click");
}

// function restart(){

//      document.getElementsByTagName('restart');
//     location.reload();
// }



























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
