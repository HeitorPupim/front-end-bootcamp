// requiring modules..
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set view engine to ejs (embedded javascript)..

//use body parser native from express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); // use public folder for static files (css, images, etc.)

let items = [];

app.get('/', (req,res) => {

   let today = new Date();


   let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
   };

   let day = today.toLocaleDateString("en-US", options);

   res.render('list', {kindOfDay: day,
                        newListItems: items});             
});


app.post('/', (req,res) =>{
   let item = req.body.newItem;  
   
   items.push(item);

   res.redirect('/');
});



app.listen(3000, () => {
   console.log("Server is running on port 3000.");
});