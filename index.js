function diceChallenge(){

    var firstUserDice = Math.floor(Math.random() * 6) + 1;
    var secondUserDice = Math.floor(Math.random() * 6) + 1; 
  
    var randomImageSource = "dice" + firstUserDice  + ".png"; 
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    var randomImageSource2 = "dice" + secondUserDice + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    if (firstUserDice  > secondUserDice) {
      document.querySelector("h1").innerHTML = "Player 1 Wins! 🎊";
    }
   else if (firstUserDice  < secondUserDice) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎊";
   }
    else {
       document.querySelector("h1").innerHTML = "Oops Draw! 😟";
   }
  }