//Variable declarations 

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//random computer letter
function generateRanLetter(){
	var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	return compLetter;
	console.log(compLetter);
}
generateRanLetter();

//Function that starts the game
var start = document.onkeyup = function(event){
	var userLetters = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userLetters);

	guessedLetters.push(userLetters);
	console.log(guessedLetters);

	if(userLetters === compLetter){
		console.log("you win"); 
		reset();
	}else{
		guesses--;
		console.log(guesses);
	}

	if(guesses === 0){
		console.log("you lose");
		reset();
	}
}


function reset() {
	generateRanLetter();
	start();
}
