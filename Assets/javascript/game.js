
// variables declared
var wins = 0,
  losses = 0, 
  remaining = 10,
  guesses = [],
  randomLetter,
  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//functions

var restartGame = function() {
  remaining = 10;
	guesses = [];
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	
  console.log('randomLetter: ' + randomLetter);
  document.getElementById("guesses").innerHTML = guesses.join(", ");
	document.getElementById("remaining").innerHTML = remaining;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}

// captures users input
document.onkeyup = function (event) {
	var userInput = event.key;
  remaining--;
  guesses.push(userInput);
  document.getElementById("remaining").innerHTML = remaining; 
  
  document.getElementById("guesses").innerHTML = guesses.join(", ");
  
  if (userInput === randomLetter) {
    wins++
    alert("You won bruh")
    restartGame();
  }
  
  if (remaining === 0) {
      losses++;
      alert("Loser! Go ahead, try again!");
      restartGame();
    
  };
  
  
  
}

// start game
restartGame();

updateRemaining();
updateGuesses();

if (remaining > 0) {
	if (guesses == randomChoice) {
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		alert("You Win!");
		reset();
	}
} else if (remaining == 0) {
	losses++;
	document.querySelector("#losses").innerHTML = losses;
	alert("Loser! Go ahead, try again!");
	reset();
};






