alert("Note: Reload your browser to play this game")
var name1 = prompt("Player 1");
var name2 = prompt("Player 2");


var randomNumber1 = Math.floor(Math.random() * 7);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1)


var randomNumber2 = Math.floor(Math.random() * 7);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = name1 + " " + "won!🚩"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = name2 + " " + "won!🚩"
}
else{
    document.querySelector("h1").innerHTML ="Draw!"
}

