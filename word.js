function Word(){
	// array of possible game words. 
	this.wordsArray = ["Anchorman", "Superbad", "The Other Guys", "Step Brothers", "Liar Liar", "Knocked Up", "Zoolander", "Tropic Thunder", "Dodgeball", "Old School", "The 40 Year Old Virgin", "Dumb and Dumber", "Meet the Parents"];

	//pick a random word from the array. 
	this.currentWord = this.wordsArray[Math.floor(Math.random()*this.wordsArray.length)];

	//empty array to hold the underscores
	this.underscores = [];

	// this function is mostly to test and debug. 
	this.printWord = function (){
		return this.currentWord;
	}
	//this will be the undescores I display for the user. 
	this.underscoresDisplay; 

	// display the underscores of the gameword. 
	this.displayUnderscores = function (){
		for (i=0; i<this.currentWord.length; i++){
			if(this.currentWord[i] === " "){
				this.underscores.push(" ");
			}
			else {
				this.underscores.push("_"); 
			}
		}
		//make the underscoresDsiaply the joined version of the orginal array 
		this.underscoresDisplay = this.underscores.join(' ');
		console.log(this.underscoresDisplay +"\n");
	}
	// this replaces the underscores by looping through the word
	this.replaceUnderscores = function(letter){
		//make current word lowercase 
		this.currentWord = this.currentWord.toLowerCase();

		//maybe create a variable with the original word and use the characters there to replace the underscores to keep the capital letters

		for(i=0; i<this.currentWord.length; i++){
			if(this.currentWord.charAt(i) === letter){
				this.underscores[i] = letter;
			}
		}
		console.log(this.underscores.join(' ') +"\n");
		this.underscoresDisplay = this.underscores.join(' ');
	}
	//check to see if user guessed the word by comparing the array of underscores to the current word; 
	this.didUserWin = function(){
		//need to make this variable the word with noe spaces in between 
		this.underscoresDisplay = this.underscores.join('');
		
		if(this.underscoresDisplay === this.currentWord.toLowerCase()){
			return true;
		}
		else{
			return false; 
		}
	}

	this.showUnderscores = function(){
		//make the underscore display with the spaces 
		this.underscoresDisplay = this.underscores.join(' ')
		console.log(this.underscoresDisplay);
	}

}

module.exports = Word;