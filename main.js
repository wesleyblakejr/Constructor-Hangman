var inquirer = require("inquirer");
var prompt = require("prompt");
var randomWord = require("./words.js");
var letters = require("./letters.js")



//game function
var game = function(gameWord,  numOfGuesses, guessesleft) {
	this.gameWord = randomWord;
	this.numOfGuesses = "";
	this.guessesLeft = 10;

	this.guesses = function() {
		if (this.numOfGuesses <= this.guessesLeft) {
			guessesLeft --;
			console.log("You have " + this.guessesLeft + ".");
		}
	};
	this.wordLength = function () {

	};
	

}
//vars for prompt
var lettersGuesses = [];
var userGuess = 0;
//
var askUser = function() {

	if (count < randomWord.length &&) {
		userGuess ++;
		console.log("Guess again.");
	}


	inquirer.prompt([
		{
			name: "guess",
			type: "input",
			message: "Guess a letter."
		}

	]).then(function(answers) {
		var newLetter = new letters(answers.)
	});
};
