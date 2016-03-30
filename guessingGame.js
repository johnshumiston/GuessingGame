/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
$(document).ready(function() {


var playersGuess
var winningNumber



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	winningNumber = Math.floor(Math.random()*100)+1;
	return winningNumber;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +$('#guess').val();
	$('#guess').append('playersGuess');
	$('#guess').val("");
	$('playersGuess').remove();
};
// Determine if the next guess should be a lower or higher number
$('#theguess').on('click', playersGuessSubmission);


function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}

});
/* **** Event Listeners/Handlers ****  */

