'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      history.belongsTo(models.inventory);
      history.belongsTo(models.user);
    }
  }
  history.init({
    cc: DataTypes.STRING,
    purchased: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'history',
  });
  return history;
};