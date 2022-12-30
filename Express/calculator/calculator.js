//set up express module

const express = require('express');
const app = express();

app.get("/", function(req, res){
   res.get("Hello World!")
});

app.listen(3000, function(){
   console.log("Server started on port 3000...")
});