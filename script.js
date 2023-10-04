//instructions
window.onload = function () {
  alert(
    "Welcome to the Dice Game!\n\nHere are the instructions:\n\n1. Select a unique name for each player.\n2. Click on the button to roll the standard six-sided dice.\n3. After rolling, the player with the highest dice number wins that round.\n4. If the players roll the same highest number, it's a draw for that round.\n5. The player who wins the most rounds is the overall winner."
  );
};

// Player name
let player1 = "Player 1";
let player2 = "Player 2";

// Function to change the player name
function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;

  document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
  setTimeout(function () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = player2 + " WINS!";
    } else {
      document.querySelector("h1").innerHTML = player1 + " WINS!";
    }
  }, 2500);
}
