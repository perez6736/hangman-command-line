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
		console.log(this.underscoresDisplay);
	}
	// this replaces the underscores by looping through the word
	this.replaceUnderscores = function(letter){
		//make current word lowercase 
		this.currentWord = this.currentWord.toLowerCase();  
		for(i=0; i<this.currentWord.length; i++){
			if(this.currentWord.charAt(i) === letter){
				this.underscores[i] = letter;
			}
		}
		console.log(this.underscores.join(' '));
	}
	//check to see if user guessed the word by comparing the array of underscores to the current word; 
	this.didUserWin = function(){
		if(underscores.join('') === this.currentWord){
			return true;
		}
		else{
			return false; 
		}
	}

}

module.exports = Word;