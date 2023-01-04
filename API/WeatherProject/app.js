// requiring modules..
const { response } = require('express');
const express = require('express');
const https = require('https');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {

      res.sendFile(__dirname + '/index.html');
});


app.post("/", (req,res) => {
   // check if received the content:
   // console.log(req.body.cityName);

   const cityName = req.body.cityName;
   const apiKey = '238fb2253076f202bce8e9ab1505d8ec'
   const units = 'metric'

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`
   
   https.get(url, (response) => {
      //Send in console the status code of the response. 200 for success..
      console.log(response.statusCode);
      
      response.on("data", (data) => {
         const weatherData = JSON.parse(data)
         const temp = weatherData.main.temp;
         const weatherDescription = weatherData.weather[0].description;
         const icon = weatherData.weather[0].icon;
         const imgURL = 'http://openweathermap.org/img/wn/'+ icon + '@2x.png'
         
         res.write(`<p> The weather is currently ${weatherDescription} </p>`);
         res.write(`<h1> The temperature in ${weatherData.name} is ${temp} degrees Celcius </h1>`)
         res.write(`<img src = "${imgURL}">`)
         res.send();
      });
   });
});

app.listen(3000, () => {
   console.log("Server is running on port 3000.");
});