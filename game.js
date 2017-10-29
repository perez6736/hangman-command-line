var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require('inquirer');

//keep track of guesses
var guessesRemaining = 5; 


function startGame(){

	// get the word from the word object 
	var gameWord = new Word();

	// tell the user to make a guess. 
	console.log(" Please make a guess! The category is funny movies! "); 

	//for testing s
	console.log(gameWord.currentWord);

	//show underscores the first time 
	gameWord.displayUnderscores();

	//prompt the uuser for a guess 
	askForGuess(gameWord);
}
// this function takes in the gameword as the parameter 
function askForGuess (word){
	//empty array of guessed letters
	var lettersGuessed = [];

//guessesRemaining > 0 || 
	if(!word.didUserWin()){ //if the user has guesses let him guess. or if he hasnt won
		
		console.log(word.didUserWin());

		//display the underscores. 
		inquirer.prompt([{
			name: "letter",
			message: "Guess a letter and press enter. You have " + guessesRemaining + " guesses left."
			// need to validate that the user put a single letter and its valid. 
		  }])
	
		.then(function (answers) {
			var letter = new Letter(answers.letter);
			console.log("the guess was - " + letter.letterGuessed);
			lettersGuessed.push(letter.lettersGuessed); 
	
			// after we get the guess we need to check if the guess was correct. 
			if (letter.isCorrect(word.currentWord)){
				//do something for correct guesses
				console.log("correct guess");
				// replace the underscores 
				word.replaceUnderscores(letter.letterGuessed);
				askForGuess(word);
			}
			else{
				console.log("incorrect guess");
				// wrong guess means you lose a guess
				guessesRemaining--; 
				word.showUnderscores();
				askForGuess(word);
			}
	
	
		});
	}

	else{
		if(word.didUserWin()){
			console.log("You won!");
		}
		else{
			console.log("Game over you ran out of guesses. ");
		}
		
	}
}

var test = new Word(); 

startGame(); 
