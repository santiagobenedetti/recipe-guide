const { Router} = require("express");
const router = Router();
const axios = require('axios');
const fs = require('fs');
const env = require('dotenv').config();
const apiKey = process.env.API_KEY;

const {db, RecipeMin} = require('../../db');

router.get('/', async (req, res) => {
  // var recipes = await axios('http://localhost:3002')
  //     .then(r => res.send(r.data.results))
  //     .catch(e => {console.log(e); res.send( [])});
  //const recipes = await RecipeMin.findAll();
  //res.send(recipes);


  var recipes = await RecipeMin.findAll();
  recipes = recipes.map(r => r.get({plain: true}));
  res.json(recipes);
})

router.get('/:id', async (req, res) => {
  console.log('Estoy buscando en spooncular');

  let recipeInfo = {};

  //recipeInfo = {"vegetarian":false,"vegan":false,"glutenFree":false,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":true,"sustainable":false,"weightWatcherSmartPoints":6,"gaps":"no","lowFodmap":false,"preparationMinutes":5,"cookingMinutes":10,"aggregateLikes":910,"spoonacularScore":97.0,"healthScore":33.0,"creditsText":"Jen West","sourceName":"Pink When","pricePerServing":241.43,"extendedIngredients":[{"id":11333,"aisle":"Produce","image":"green-pepper.jpg","consistency":"solid","name":"green bell pepper","nameClean":"green pepper","original":"green bell pepper, chopped","originalName":"green bell pepper, chopped","amount":6.0,"unit":"servings","meta":["green","chopped"],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":11297,"aisle":"Produce;Spices and Seasonings","image":"parsley.jpg","consistency":"solid","name":"parsley","nameClean":"parsley","original":"parsley","originalName":"parsley","amount":6.0,"unit":"servings","meta":[],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":10211821,"aisle":"Produce","image":"bell-pepper-orange.png","consistency":"solid","name":"bell pepper","nameClean":"bell pepper","original":"pepper","originalName":"pepper","amount":6.0,"unit":"servings","meta":[],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":18334,"aisle":"Refrigerated","image":"pie-crust.jpg","consistency":"solid","name":"pie crust","nameClean":"refrigerated pie crust","original":"whole wheat crust","originalName":"whole wheat crust","amount":6.0,"unit":"servings","meta":["whole wheat"],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":10211529,"aisle":"Produce","image":"roma-tomatoes.png","consistency":"solid","name":"roma tomato","nameClean":"italian tomato","original":"Roma tomato, diced","originalName":"Roma tomato, diced","amount":6.0,"unit":"servings","meta":["diced"],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":1001026,"aisle":"Cheese","image":"shredded-cheese-white.jpg","consistency":"solid","name":"shredded mozzarella cheese","nameClean":"shredded mozzarella","original":"shredded Mozzarella cheese","originalName":"shredded M zarella cheese","amount":1.0,"unit":"oz","meta":["shredded"],"measures":{"us":{"amount":1.0,"unitShort":"oz","unitLong":"ounce"},"metric":{"amount":28.35,"unitShort":"g","unitLong":"grams"}}},{"id":11549,"aisle":"Canned and Jarred","image":"tomato-sauce-or-pasta-sauce.jpg","consistency":"solid","name":"tomato sauce","nameClean":"canned tomato sauce","original":"tomato sauce","originalName":"tomato sauce","amount":6.0,"unit":"servings","meta":[],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":5696,"aisle":"Meat","image":"turkey-breast.jpg","consistency":"solid","name":"turkey breast","nameClean":"boneless turkey breast","original":"½-3/4 cup chopped Turkey breast (cooked)","originalName":"chopped Turkey breast (cooked)","amount":0.5,"unit":"cup","meta":["cooked","chopped","()"],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":10611282,"aisle":"Produce","image":"white-onion.png","consistency":"solid","name":"white onion","nameClean":"white onion","original":"white onion, chopped","originalName":"white onion, chopped","amount":6.0,"unit":"servings","meta":["white","chopped"],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}}],"id":715495,"title":"Turkey Tomato Cheese Pizza","readyInMinutes":15,"servings":6,"sourceUrl":"http://www.pinkwhen.com/turkey-tomato-cheese-pizza-recipe/","image":"https://spoonacular.com/recipeImages/715495-556x370.jpg","imageType":"jpg","summary":"You can never have too many main course recipes, so give Turkey Tomato Cheese Pizzan a try. For <b>$2.04 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>242 calories</b>, <b>19g of protein</b>, and <b>8g of fat</b> each. 910 people have made this recipe and would make it again. This recipe is typical of Mediterranean cuisine. From preparation to the plate, this recipe takes approximately <b>15 minutes</b>. A mixture of bell pepper, onion, tomato sauce, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the pepper you could follow this main course with the <a href=\"https://spoonacular.com/recipes/dr-pepper-cake-with-flour-cooked-frosting-539165\">Dr. Pepper Cake with Flour Cooked Frosting</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a> for similar recipes.","cuisines":["Mediterranean","Italian","European"],"dishTypes":["lunch","main course","main dish","dinner"],"diets":[],"occasions":[],"winePairing":{},"instructions":"Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top. Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.Add another layer of cheese, and then sprinkle with pepper.Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top.","ingredients":[{"id":11549,"name":"tomato sauce","localizedName":"tomato sauce","image":"tomato-sauce-or-pasta-sauce.jpg"},{"id":0,"name":"spread","localizedName":"spread","image":""},{"id":0,"name":"crust","localizedName":"crust","image":""},{"id":0,"name":"wheat","localizedName":"wheat","image":""}],"equipment":[{"id":404706,"name":"grill","localizedName":"grill","image":"grill.jpg"}]},{"number":2,"step":"Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.","ingredients":[{"id":10211821,"name":"bell pepper","localizedName":"bell pepper","image":"bell-pepper-orange.png"},{"id":1041009,"name":"cheese","localizedName":"cheese","image":"cheddar-cheese.png"},{"id":11529,"name":"tomato","localizedName":"tomato","image":"tomato.png"},{"id":5165,"name":"whole turkey","localizedName":"whole turkey","image":"turkey-raw-whole.jpg"},{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"}],"equipment":[]},{"number":3,"step":"Add another layer of cheese, and then sprinkle with pepper.","ingredients":[{"id":1041009,"name":"cheese","localizedName":"cheese","image":"cheddar-cheese.png"},{"id":1002030,"name":"pepper","localizedName":"pepper","image":"pepper.jpg"}],"equipment":[]},{"number":4,"step":"Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.","ingredients":[],"equipment":[{"id":404706,"name":"grill","localizedName":"grill","image":"grill.jpg"}],"length":{"number":10,"unit":"minutes"}}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/turkey-tomato-cheese-pizza-715495"};


   await axios(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apiKey}`)
       .then(r => {recipeInfo = r.data; console.log(r.data)})
       .catch(e => {console.log(e); res.send({})})

  console.log(recipeInfo.analyzedInstructions)
  if (recipeInfo.analyzedInstructions.length === 0) {
    delete recipeInfo.analyzedInstructions
  }
  console.log(recipeInfo.analyzedInstructions)
  res.send(recipeInfo)
})

router.post('/generateRecipes', async (req, res) => {
  var response = await axios('http://localhost:3002')
      .catch(e => console.log(e))


  const recipes = response.data.results;

  console.log(recipes)

  recipes.forEach(async (recipe) => {
    const {id, title, image} = recipe;
    try {
      const newRecipe = await RecipeMin.create({
        id,
        title,
        image
      });
    } catch (e) {
      console.log(e);
    }
  })

})

module.exports = router;