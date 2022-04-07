var randomNumber1 = Math.floor(Math.random() * 6 + 1);  //generates a random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //random image from sice images 1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);  //generates a random number from 1-6

var randomDiceImage = "dice" + randomNumber2 + ".png" //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //random image from sice images 1-6

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 💃"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!! 💃💃"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
