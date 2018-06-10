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
 startTimer();
 
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
 		alert("great job");
 		
 	} else {
 		console.log("not quite!");
 	}
 }

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
 });
}

 
function startTimer(){
    let clicks = 0;
    $(".card").on("click", function(){
        clicks +=1;
        if (clicks === 1) {
            var seconds = 0;
            function time(val) {
                return val > 9 ? val : "0" + val;
            }
            timer = setInterval( function(){
                $(".seconds").html(time(++seconds % 60));
                $(".minutes").html(time(parseInt(seconds / 60, 10)));
            }, 1000);
        }
    })
}






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
