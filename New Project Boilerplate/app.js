// requiring modules..
const express = require('express');
const app = express();

//use body parser native from express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express); //use express


app.get('/', (req,res) => {
   res.send("Server is up and running.");
});


app.listen(3000, () => {
   console.log("Server is running on port 3000.");
});