//jshint esversion: 6
const { response } = require('express');
const express = require('express');
const https = require('https');
const { dirname } = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// -------------------------------------------

app.get('/', (req,res) => {
   res.sendFile(__dirname + '/signup.html')
})

//main route
app.post("/", function(req, res) {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const email = req.body.email;
   
   const data = {
     members: [{
       email_address: email,
       status: "subscribed",
       merge_fields: {
         FNAME: firstName,
         LNAME: lastName,
       }
 
     }]
   }

   const jsonData = JSON.stringify(data);
   const url = "https://us21.api.mailchimp.com/3.0/lists/55f5d407c0a"
   
   const options = {
       method: "POST",
       auth: "heitor:95fa3e5eb9d35f0a37883408f456a790-us21"        //NO SPACE IN BETWEEN
     }
   
   const request = https.request(url, options, function(response) {
      
      if (response.statusCode === 200){
         res.sendFile(__dirname + "/success.html");
      } else {
         res.sendFile(__dirname + "/failure.html");
      }
     
     
      response.on("data", function(data) {
       console.log(JSON.parse(data));
     })
   })
   
   request.write(jsonData);
   request.end();
 });

// failure route:
app.post("/failure", (req,res) => {
   res.redirect("/");
});


app.listen(3001, () => {
   console.log("Server is running on port 3001...");
})

//api key: 95fa3e5eb9d35f0a37883408f456a790-us21
// audience id: 55f5d407c0