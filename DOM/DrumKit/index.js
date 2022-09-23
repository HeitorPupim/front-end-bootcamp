//Cannot add handleClick() cause it will be called immediately.
//Instead, we add a reference to the function.

//Select all the buttons and add event listener to each of them.

//Detecting button press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detection Keyboard Press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Function to make sound depending on the button pressed
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
     
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//Function to add animation to the button pressed
function buttonAnimation(currentKey){
  
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  //Timeout to return the button to its original state
  setTimeout(function(){ 
    activeButton.classList.remove("pressed");
  }, 100); //after 100ms
}