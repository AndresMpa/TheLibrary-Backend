'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.hasMany(
        models.inventory, {
          foreignKey: "issn",
          as: "inventories"
        }
      );
    }
  }
  book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    number_pages: DataTypes.INTEGER,
    editorial: DataTypes.STRING,
    published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};