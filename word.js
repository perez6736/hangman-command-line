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
		this.underscores = this.underscores.join(' ');
		console.log(this.underscores);
	}



}

module.exports = Word;