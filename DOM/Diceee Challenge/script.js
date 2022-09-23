function rollTheDice() {
   var a = Math.floor(Math.random()*6) + 1; 
   return a;
}



function displayWinner(p1,p2) {
   let h1Selector = document.querySelector("h1"); 
   if ( p1 > p2 ) {
      // p1 wins
      h1Selector.innerHTML = "Player 1 Wins!";
   } else if ( p1 === p2 ) {
      h1Selector.innerHTML = "Draw!";
   } else {
      h1Selector.innerHTML = "Player 2 Wins!";	
   }
}

function replaceImages(p1, p2) {
   // Replace images
   let img1 = document.getElementsByTagName("img")[0].src.replace('6', String(p1));
   let img2 = document.getElementsByTagName("img")[1].src.replace('6', String(p2));

   //Replacing images
   document.getElementsByTagName("img")[0].src = img1;
   document.getElementsByTagName("img")[1].src = img2;
}

// Set players
var p1 = rollTheDice();
var p2 = rollTheDice();

displayWinner(p1,p2);
replaceImages(p1, p2);
