// 1. Secret/Target Number generate kiya (1 se 100 ke beech random number)
let targetNumber = Math.floor(Math.random() * 100) + 1;

// 2. HTML elements select kiye
let guessBtn = document.querySelector("#guessBtn");
let resetBtn = document.querySelector("#resetBtn");
let guessInput = document.querySelector("#guessInput");
let gameMessage = document.querySelector("#gameMessage");

// 3. Main game logic function
function checkGuess(){
  // Input se string lekar number me convert kiya
  let numberGuess = Number(guessInput.value);
  // Validation: Agar input khali ho ya ranges se bahar ho
  if(!numberGuess || numberGuess < 1 || numberGuess > 100){
    gameMessage.innerText = "Plz type a number between 1 to 100";
    return;
  }
  // 4. Core Logic (Conditionals testing aur UI changes)
  if(numberGuess > targetNumber){
    gameMessage.classList.remove("too-high");
    gameMessage.classList.add("too-high");
    gameMessage.innerText = "Too High! Try a smaller number";
    guessInput.value = "";  // Input clear kiya naye try ke liye
  } else if(numberGuess < targetNumber){
    gameMessage.classList.remove("too-low");
    gameMessage.classList.add("too-low");
    gameMessage.innerText = "Too Low! try a bigger number";
    guessInput.value = "";
  } else{
    gameMessage.classList.remove("success");
    gameMessage.classList.add("success");
    gameMessage.innerText = `Congratulations! You entered correct number ${targetNumber}`;

    // Game end hone par UI buttons swap kiye
    guessBtn.classList.add("hidden");
    guessInput.classList.add("hidden");
    resetBtn.classList.remove("hidden");
  }
}
guessBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    checkGuess();
  }
});

// Game Reset karne ke liye (Play Again)
resetBtn.addEventListener("click", function(){
  targetNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  gameMessage.classList.remove("too-high");
  gameMessage.classList.remove("too-low");
  gameMessage.classList.remove("success");
  gameMessage.innerText = "Start guessing to see hints!";

  // UI wapas normal ki
  guessBtn.classList.remove("hidden");
  guessInput.classList.remove("hidden");
  resetBtn.classList.add("hidden");
});