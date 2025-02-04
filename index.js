const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
  })
  //
  // Iteration 2
  //
  // .then(() => {
  //   // Run your code here, after you have insured that the connection was made
  //   const newRecipe = Recipe.create({
  //     title: "Crèpes",
  //     level: "Easy Peasy",
  //     ingredients: ["Flour", "Eggs", "Milk"],
  //     cuisine: "Française",
  //     dishType: "breakfast",
  //     image:
  //       "https://img-3.journaldesfemmes.fr/Qf4POYz6ateXL7_PU55SSeKNKf4=/750x500/smart/a5181741d55b4b3d8b54bda593ff87f5/recipe-jdf/10021667.jpg",
  //     duration: 20,
  //   });
  //   return newRecipe;
  // })
  // .then((newRecipe) => console.log(newRecipe))
  //
  // Iteration 3
  //
  // .then(() => {
  //   const newRecipes = Recipe.insertMany(data);
  //   return newRecipes;
  // })
  // .then((newRecipes) =>
  //   newRecipes.forEach((recipe) => {
  //     console.log(recipe.title);
  //   })
  // )
  //
  // Iteration 4
  //
  // .then(() => {
  //   const query = { title: "Rigatoni alla Genovese" };
  //   console.log({ query });
  //   const update = { duration: 100 };
  //   console.log({ update });
  //   const newUpdate = Recipe.findOneAndUpdate(query, update, { new: true });
  //   return newUpdate;
  // })
  // .then((newUpdate) =>
  //   console.log(`You have succeffully update your ${newUpdate.title}`)
  // )

  //
  // Iteration 5
  //
  // .then(() => {
  //   const query = { title: "Carrot Cake" };
  //   const removedCount = Recipe.deleteOne(query);
  //   return removedCount;
  // })
  // .then((removedCount) =>
  //   console.log(`You have succeffully delete ${removedCount.deletedCount} recipe`)
  // )
  .then(()=> {
    mongoose.connection.close()
    console.log(`Connection closed`)
  })

  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
