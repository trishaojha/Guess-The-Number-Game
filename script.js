let targetNumber;
let maxRange;
let score = 100;

function startGame() {
  const difficulty = document.getElementById("difficulty").value;
  if (difficulty === "easy") maxRange = 10;
  else if (difficulty === "medium") maxRange = 50;
  else maxRange = 100;

  targetNumber = Math.floor(Math.random() * maxRange) + 1;
  score = 100;

  document.getElementById("game").classList.remove("hidden");
  document.getElementById("message").textContent = "";
  document.getElementById("score").textContent = score;
  document.getElementById("userGuess").value = "";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("userGuess").value);
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    return;
  }

  if (guess === targetNumber) {
    document.getElementById("message").textContent = `🎉 Correct! The number was ${targetNumber}. Final score: ${score}`;
    document.getElementById("game").classList.add("hidden");
  } else {
    score -= 10;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = guess > targetNumber ? "Too high!" : "Too low!";
    if (score <= 0) {
      document.getElementById("message").textContent = `💥 Game over! The number was ${targetNumber}`;
      document.getElementById("game").classList.add("hidden");
    }
  }
}
