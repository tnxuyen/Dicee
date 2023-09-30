function roll() {
    var random1 = Math.floor(Math.random() * 6) + 1;

    var randomImage = "img" + random1 + ".png";

    var randomSource = "img/" + randomImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomSource);


    var random2 = Math.floor(Math.random() * 6) + 1;

    var randomSource2 = "img/img" + random2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomSource2);


    //If player 1 wins
    if (random1 > random2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (random2 > random1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

}
document.getElementById("roll").onclick = function() { roll(); };