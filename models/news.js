'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      news.belongsTo(models.inventory);
    }
  }
  news.init({
    id_inventory: DataTypes.STRING,
    news_title: DataTypes.STRING,
    description: DataTypes.STRING,
    removed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'news',
  });
  return news;
};