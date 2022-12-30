//jshint esversion:6
const express = require("express");
const app = express();

//GET request:

// routes.......

    // "/" = home route
    // callback gets triggered and sends back the response.
app.get("/", function(req, res){
   res.send("<h1>Hello, world!</h1>");
})
    // "/contact" = contact route
app.get("/contact", function(req, res){
   res.send("Contact me at: heitorpupim@aaaaa.com");
})
   // "/about" = about route page
app.get("/about", function(req, res){
   res.send("My name is Heitor Pupim, I'm 22 years old and I'm a student of Computer Science at the University of São Paulo.");
});




//         port, callback function
app.listen(3000, function() {
               // falar que vai estar na porta
   console.log("Server started on port 3000");
});

