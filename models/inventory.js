'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.Book);
      Inventory.belongsTo(models.News);
    }
  }
  Inventory.init({
    issn: DataTypes.STRING,
    language: DataTypes.STRING,
    state: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    reserved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};
