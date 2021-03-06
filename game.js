var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require('inquirer');

//keep track of guesses
var guessesRemaining; 


function startGame(){

	// set guesses
	guessesRemaining = 5;

	// get the word from the word object 
	var gameWord = new Word();

	// tell the user to make a guess. 
	console.log("\nPlease make a guess! The category is funny movies! "); 

	//for testing s
	//console.log(gameWord.currentWord);

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
	if(!word.didUserWin() && guessesRemaining>0){ //if the user has guesses let him guess. or if he hasnt won

		//display the underscores. 
		inquirer.prompt([{
			name: "letter",
			message: "Guess a letter and press enter. You have " + guessesRemaining + " guesses left.",
			// need to validate that the user put a single letter and its valid. 
			validate: function (answer){
				if(answer.length>1 || answer === ""){
					console.log(" -Please enter a valid guess.-")
					return false;
				}
				return true; 

			}
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
			console.log("You won! \n");
			startGame();
		}
		else{
			console.log("The word was: " + word.currentWord + "\nGame over you ran out of guesses. \n");
			startGame();
		}
		
	}
}


startGame(); 
