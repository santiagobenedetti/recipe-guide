var Sequelize = require("sequelize");
var recipeMinModel = require('./Models/RecipeMin');
var usuarioModel = require('./Models/Usuario');

var sequelize = new Sequelize('postgres://santi:1234@localhost:5432/recipeguide');

recipeMinModel(sequelize);
usuarioModel(sequelize);

const {RecipeMin, Usuario} = sequelize.models;

// Associations
// Player.belongsToMany(Team, { through: 'PlayerTeam' });
// Team.belongsToMany(Player, { through: 'PlayerTeam' });

sequelize.sync(/*{force: true}*/);

module.exports = {
  ...sequelize.models,
  db: sequelize
}