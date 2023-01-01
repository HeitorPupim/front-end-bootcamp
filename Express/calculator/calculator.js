//set up express module
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
//code to use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//Get Requests:

//Root Calculator:
app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});

//BMI Calculator:
app.get("/bmicalculator", (req,res) => {
   res.sendFile(__dirname + '/bmiCalculator.html');
});

//Post:
app.post("/", function(req,res){
   
   var num1 = Number(req.body.n1);
   var num2 = Number(req.body.n2);

   var result = num1 + num2;

   res.send("The result of the calculation is: " + result);
});

app.post("/bmicalculator", (req,res) =>{
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);

   var result = weight/(height)**2;

   res.send("Your BMI is: "+ result);
});


app.listen(3000, () => {
   console.log("Server started on port 3000...")
});
