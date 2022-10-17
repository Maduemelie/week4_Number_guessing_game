let userName = prompt("Please enter your username");

if(userName !=null){
    const usersGreating = document.querySelector("#user_welcome")
    usersGreating.textContent = "hello " + userName + "! you are welcome"
    // console.log(usersGreating)   
}

const previousGuess = document.querySelector('.previousGuess')
const rightWrong = document.querySelector('.rightWrong')
const submit = document.querySelector('.submit');
let points = document.querySelector('.points')

let count = 0
let range = 2;

let rightGuess = Math.floor(Math.random() * range) + 1



let guessedNums = []
submit.addEventListener('click', checkGuess)

function checkGuess(){
    let usersGuess = document.querySelector('.guessedNumberField').value;
    
    if(usersGuess < 1 || usersGuess > range){
        alert(`Enter a number between 1 and ${range}`)
    }else{
        guessedNums.push(usersGuess)
        
    }
   
    if(usersGuess < rightGuess){
        rightWrong.textContent = "your guess is wrong, try again"
        previousGuess.textContent = "Previous guess: " + guessedNums
     

    }else if(usersGuess > rightGuess){
        rightWrong.textContent = "your guess is wrong, try again"
        previousGuess.textContent = "Previous guess: " +guessedNums
       
    }else if (usersGuess == rightGuess){
        count = count + 1
       
        points.textContent = "points: " + count
       
        rightWrong.textContent = "congrats , you got it"
        previousGuess.textContent = "Your guess: " + rightGuess
         range++
        
      
    }
   
    // rightGuess;
}

rightGuess = Math.floor(Math.random() * range) + 1
previousGuess.textContent = "Previous guess: "









// const submit = document.querySelector('.submit');

// submit.addEventListener('click', checkGuess)


//     let range = 2


//  function checkGuess(range){
//     
     

//      let rndInt = Math.floor(Math.random() * range) + 1
//      let point = 0
//      if(usersGuess === rndInt){
//         point += 1
//         range += 1
    
//      }
     
// }
 


