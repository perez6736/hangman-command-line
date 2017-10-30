function Word(){
	// array of possible game words. 
	this.wordsArray = ["Anchorman", "Superbad", "The Other Guys", "Step Brothers", "Liar Liar", "Knocked Up", "Zoolander", "Tropic Thunder", "Dodgeball", "Old School", "The 40 Year Old Virgin", "Dumb and Dumber", "Meet the Parents"];

	//pick a random word from the array. 
	this.currentWord = this.wordsArray[Math.floor(Math.random()*this.wordsArray.length)];
	// this is used keep the upper case of the word 
	this.orginalWord = this.currentWord;

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

		console.log("The original word " + this.orginalWord);

		//make current word lowercase because the user will most likely be putting in lowercase
		this.currentWord = this.currentWord.toLowerCase();
		for(i=0; i<this.currentWord.length; i++){
			if(this.currentWord.charAt(i) === letter){
				this.underscores[i] = this.orginalWord.charAt(i);
			}
		}
		console.log(this.underscores.join(' ') +"\n");
		this.underscoresDisplay = this.underscores.join(' ');
	}
	//check to see if user guessed the word by comparing the array of underscores to the current word; 
	this.didUserWin = function(){
		//need to make this variable the word with noe spaces in between 
		this.underscoresDisplay = this.underscores.join('');
		console.log("undsecoresdisplay:" + this.underscoresDisplay + "  currentWord:" + this.orginalWord);
		if(this.underscoresDisplay === this.orginalWord){
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