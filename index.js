const userName = prompt("what is your name")


function guessNumber(range){
  range = 2;
  let point = 0;
  let foundCorrectNumber = false;
  let numberToGuess = Math.floor(Math.random() * range) + 1;

  while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt(`Guess a number from 1 to ${range}: `);

  guess = Number(guess);

  // Compare the guess to the randomNumber  generated and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    point++
    console.log(`point: ${point}`)
    numberToGuess = Math.floor(Math.random() * range) + 1;

    range++;
    
    
    
  } else {
    console.log('Sorry, guess again!');
  }
}

  
}
guessNumber(2)
