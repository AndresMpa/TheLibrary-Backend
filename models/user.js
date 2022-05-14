'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(
        models.History, {
          foreignKey: "cc",
          as: "histories"
        }
      );
    }
  }
  User.init({
    permission: DataTypes.INTEGER,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    mail: DataTypes.STRING,
    user_account: DataTypes.STRING,
    password_account: DataTypes.STRING,
    news_feed: DataTypes.BOOLEAN,
    preferences: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
