var Sequelize = require("sequelize");
var recipeMinModel = require('./Models/RecipeMin');

var sequelize = new Sequelize('postgres://santi:1234@localhost:5432/recipeguide');

recipeMinModel(sequelize);

const {RecipeMin} = sequelize.models;

// Associations
// Player.belongsToMany(Team, { through: 'PlayerTeam' });
// Team.belongsToMany(Player, { through: 'PlayerTeam' });

sequelize.sync();

module.exports = {
  ...sequelize.models,
  db: sequelize
}