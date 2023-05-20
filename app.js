const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name : String,
  rating:Number,
  review:String
})
const personSchema = new mongoose.Schema({
  name:String,
  age:Number
});


 const Fruit = mongoose.model("Fruit",fruitSchema);

 const fruit = new Fruit({
  name:"Apple",
   rating:7,
   review:"Good fruit."
 })

const Person = mongoose.model("person",personSchema);

const person= new Person({
  name:"John",
  age: 22
})

 person.save();

const kiwi = new Fruit({
  name:"kiwi",
  score:10,
  review:"Tasty"
});
const orange = new Fruit({
  name:"orange",
  score:8,
  review:"sour taste"
});
const banana = new Fruit({
  name:"banana",
  score:7,
  review:"something"
});
Fruit.find(function(err,fruits){
  if(err){
    console.log(err);

  }else{

    fruits.forEach(function(fruit){
      console.log(fruit.name);
      mongoose.connection.close();
    })
  }
});
// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// });
// Fruit.deleteOne({name:"banana"},function(err){
//   if (err){
//     console.log(err);
//   }else {
//     console.log("success to delete");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("DONE");
//   }
// });
