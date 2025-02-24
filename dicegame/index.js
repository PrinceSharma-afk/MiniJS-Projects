var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;

switch (x) {
  case 1:
    document.querySelector(".img1").src = "./images/dice1.png";
    break;
  case 2:
    document.querySelector(".img1").src = "./images/dice2.png";
    break;
  case 3:
    document.querySelector(".img1").src = "./images/dice3.png";
    break;
  case 4:
    document.querySelector(".img1").src = "./images/dice4.png";
    break;
  case 5:
    document.querySelector(".img1").src = "./images/dice5.png";
    break;
  case 6:
    document.querySelector(".img1").src = "./images/dice6.png";
    break;
}

switch (y) {
  case 1:
    document.querySelector(".img2").src = "./images/dice1.png";
    break;
  case 2:
    document.querySelector(".img2").src = "./images/dice2.png";
    break;
  case 3:
    document.querySelector(".img2").src = "./images/dice3.png";
    break;
  case 4:
    document.querySelector(".img2").src = "./images/dice4.png";
    break;
  case 5:
    document.querySelector(".img2").src = "./images/dice5.png";
    break;
  case 6:
    document.querySelector(".img2").src = "./images/dice6.png";
    break;
}

if (x > y) {
    document.querySelector("h1").textContent = "Player 1 Wins.🏆";
} else if (x < y) {
  document.querySelector("h1").textContent = "Player 2 Wins.🚩";
} else {
  document.querySelector("h1").textContent = "It's a draw.";
}
