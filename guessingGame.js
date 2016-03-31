$(document).ready(function() {
// Generate the Winning Number

var totalGuesses =[];
var playersGuess
var winningNumber

function generateWinningNumber(){
	winningNumber = Math.floor(Math.random()*100)+1;
	return winningNumber;
};
var winningNumber=generateWinningNumber();
// Fetch the Players Guess

function playersGuessSubmission(){

	playersGuess = +$('#input').val();
	$('#input').append('playersGuess');
	$('#input').val("");
	$('playersGuess').remove();
	$('#status').text("").css('text-align', 'center');
	checkGuess(playersGuess, winningNumber);
	if(totalGuesses.length<4){
		$('#remainingguesses').text((5-totalGuesses.length) + " guesses remain...!");
	}
	if(totalGuesses.length===4){
		$('#remainingguesses').text((5-totalGuesses.length) + " guess remains...!");
	}
	if(totalGuesses.length===5){
		$('#remainingguesses').text((5-totalGuesses.length) + " guesses remain... so... you lost...");
	}
	lowerOrHigher(playersGuess, winningNumber);
};

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(playersGuess, winningNumber){
	if(playersGuess===winningNumber){
		$('#status').text("You win!!!").css('text-align','center');
	}
	else if(playersGuess<winningNumber){
		$('#status').append("Maybe... aim higher..." + "You're like " + (Math.round(Math.abs(winningNumber-playersGuess) / 10) * 10) + "ish off.").css('text-align','center');
	}
	else if(playersGuess>winningNumber){
		$('#status').append("Er... aim lower..." + "You're like " + (Math.round(Math.abs(winningNumber-playersGuess) / 10) * 10) + "ish off.").css('text-align','center');
	}
	if(totalGuesses.length>=5){
		$('#status').text("You're done.");
	}
};

// Check if the Player's Guess is the winning number 

function checkGuess(playersGuess, winningNumber){
		for(i=0; i<totalGuesses.length; i++) {
			if(totalGuesses[i]===playersGuess){
				$('#status').text("This is a duplicate").css('text-align','center');
			}
		};
		if(playersGuess===winningNumber){
			$('#status').text("You win!!!").css('text-align','center');
		}
		if(playersGuess!==winningNumber){
			$('#status').text("Try again...").css('text-align','center');
			totalGuesses.push(playersGuess);
		}
	};

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	if(totalGuesses.length===0){
		$('#status').text((Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + winningNumber + "...one of these is it!");
	}
	if(totalGuesses.length===1){
		$('#status').text((Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + winningNumber + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + "...one of these is it!");
	}
	if(totalGuesses.length===2){
		$('#status').text((Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + winningNumber + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + "...one of these is it!");
	}
	if(totalGuesses.length===3){
		$('#status').text((Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + ", " + winningNumber + ", " + (Math.floor(Math.random()*100)+1) + "...one of these is it!");
	}
	if(totalGuesses.length===4){
		$('#status').text((Math.floor(Math.random()*100)+1) + ", " + winningNumber + ", " + (Math.floor(Math.random()*100)+1) + ", " + (Math.floor(Math.random()*100)+1) + "...one of these is it!");
	}
}

// Allow the "Player" to Play Again

function playAgain(){
	totalGuesses.length=0;
	var winningNumber=generateWinningNumber();
	$('#status').text("Let's go!").css('text-align','center');
	$('#remainingguesses').text((5-totalGuesses.length) + " guesses remain...!");
}

$('#submit').on('click', playersGuessSubmission);
$('#hint').on('click', provideHint);
$('#tryagain').on('click', playAgain);

});
/* **** Event Listeners/Handlers ****  */

