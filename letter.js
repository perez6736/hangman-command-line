function Letter (letterGuessed){
	//make the letterguessed the argument cause the user will have multiple guesses so its always changing. 
	this.letterGuessed = letterGuessed

	this.isCorrect = function (word){
		//make the word lower case when comparing 
		var word = word;

		for(i=0; i<word.length; i++){
			if(word.toLowerCase()[i] === this.letterGuessed){
				return true;
			}
		}
		return false; 
	}
}

module.exports = Letter;