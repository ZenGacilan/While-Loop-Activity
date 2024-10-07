function numberGuess() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guess < secretNumber) {
      console.log("Too low, try again.");
    } else if (guess > secretNumber) {
      console.log("Too high, try again.");
    } else {
      console.log("Congratulations! You guessed the correct number.");
    }
  }
}

numberGuess(6);
