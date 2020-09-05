let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

// UI elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign min and max.

minNum.textContent = min;
maxNum.textContent = max;

// Event Listeners

guessBtn.addEventListener('click',function(){
    let guess = parseInt((guessInput.value)); 
    // console.log(guess);
    if(guess < min || guess > max || isNaN(guess)){
        setMessage(`Please enter a valid number between ${min} and ${max}.`,'red'); // calling a function
    }

    // check for result
    if(guess === winningNum){
        // disable the input field.
        // guessInput.disabled = true;
        // change the border color.
        // guessInput.style.borderColor = 'green';
        // call setMessage function
        // setMessage(`${winningNum} is Correct`,'green');
        // setMessage(`${winningNum} is Correct!. You won the Match.`,'green');

        // calling gameOver()
        guessBtn.disabled = true;
        gameOver(true,`${winningNum} is Correct!. You won the Match.`);
    }
    else{
        // wrong case.
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // guessInput.disabled = true;
            guessBtn.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`Game over.You Lose the Game.The correct guess was ${winningNum}.`,'red');
            gameOver(false,`Game over.You Lose the Game.The correct guess was ${winningNum}.`);
        }
        else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is wrong, ${guessesLeft} more chance.`,'red');
        }
    }
});

// setMessage function
function setMessage(msg,clr){
    // document.getElementById("message").style.color = clr;
    message.style.color=clr;
    message.textContent = msg;
}

// gameOver fun

function gameOver(won,msg){

    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg,color);
    
    setTimeout(function() {
        //your code to be executed after 1 second
        alert('Game Restart.');
        window.location.reload();
      }, 2000);
    
}

// random number generation.
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}