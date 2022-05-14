'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.Inventory);
      History.belongsTo(models.User);
    }
  }
  History.init({
    id_inventory: DataTypes.STRING,
    cc: DataTypes.STRING,
    purchased: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
