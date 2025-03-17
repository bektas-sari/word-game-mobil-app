let attemptsLeft = 5; // Global variable

window.checkGuess = function() {
  let userInput = document.getElementById("userGuess").value.toLowerCase();
  let correctWord = "apple";

  if (userInput === correctWord) {
    // Popup mesajı kaldırıldı, sadece ekranda mesaj gösterilecek.
    document.getElementById("message").innerText = "🎉 Congratulations! You found the correct word!";
    document.getElementById("masked-word").innerText = correctWord;
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").innerText = `Attempts left: ${attemptsLeft}`;

  if (attemptsLeft > 0) {
    document.getElementById("message").innerText = `❌ Wrong guess, try again! Attempts left: ${attemptsLeft}`;
  } else {
    document.getElementById("message").innerText = `🚨 Game over! The correct word is: ${correctWord}`;
    document.getElementById("masked-word").innerText = correctWord;
  }
};
