// If you prefer to declare jQuery and JS in the header, you use this code below:
/* 
$(document).ready(function()  {
   $("h1").css("color", "red");
}); 
*/
// ------------------------------------------------------------------------------

// This code is the jQuery version of the one below it: 
$("h1").click(function(){
   $("h1").css("color", "green");	
})


// Code without jQuery:
for (var i = 0; i < 5; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", function(){
      document.querySelector("h1").style.color = "pink";	
   })
}


//The equivalent is:
$("button").click(function (){
   $("h1").css("color", "royalblue");
})

//Select all the document.
$(document).keydown(function(event){
   $("h1").text(event.key); //Replace h1 with the key pressed.
})
