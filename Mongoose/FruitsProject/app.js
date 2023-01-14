const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

// create a schema
//validating data: https://mongoosejs.com/docs/validation.html
const fruitSchema = new mongoose.Schema( {
   name: {
      type: String,
      required: [true, "Please check your data entry, no name specified!"]
   },
   rating: {
      type: Number,
      min: 1,
      max: 10
   },
   review: String
});

// creating a new schema
const personSchema = new mongoose.Schema( {
   name: String,
   age: Number,
   favouriteFruit: fruitSchema
});

// create a model from the schema
const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

// creating a new document
const fruit = new Fruit({
   name: "Apple",
   rating: 7,
   review: "Pretty solid as a fruit."
});

 const person = new Person({
   name: "John",
   age: 37
});

person.save();

const mango = new Fruit({
   name: "Mango",
   score: 6,
   review: "Decent fruit."
});

// mango.save();

Person.updateOne({name: "John"}, {favouriteFruit
: mango}, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully updated John document.");
   }
});

/* 
const person = new Person({
   name: "Amy",
   age: 12,
   favouriteFruit: pineapple
}); */

//person.save();

const kiwi = new Fruit({
   name: "Kiwi",
   score: 10,
   review: "The best fruit!"
});

const orange = new Fruit({
   name: "Orange",
   score: 4,
   review: "Too sour for me"
});

const banana = new Fruit({
   name: "Banana",
   score: 3,
   review: "Weird texture"
});


// person.save();

/* 
Fruit.insertMany([kiwi, orange, banana], (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully saved all the fruits to fruitsDB");
   }
});   
 */

// selecting fruits:
Fruit.find( (err, fruits) => {
   if (err ){
      console.log(err);
   } else {

      mongoose.connection.close();

      fruits.forEach(fruit => {
         console.log(fruit.name);
      });
   }
});


// updating fruits: (https://mongoosejs.com/docs/api.html#model_Model.updateOne) // updating apple name to peach
//             search for id -> update name to peach

/* Fruit.updateOne({_id: "63c16c9d592181c2e173bc63" }, {name: "Peach"}, (err) => {

   if (err) {
      console.log(err);
   } else {
      console.log("Successfully updated the document.");
   }
});
 */

// deleting one fruits: filter by name -> delete

/* Fruit.deleteOne({name: "Peach"}, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully deleted the document.");
   }
});
 */

//deleting all fruits with Peach name: (deleteMany)

/* Fruit.deleteMany({name: "Peach"}, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully deleted all the documents.");
   }
});
 */

/* Person.deleteMany({name: "John"}, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully deleted all the documents.");
   }
});
 */
