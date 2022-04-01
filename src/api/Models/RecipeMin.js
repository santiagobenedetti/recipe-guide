const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('RecipeMin', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false
  })
}