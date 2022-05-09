const models = require("../models");

// Modelo a usar
/*
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
*/

module.exports = {
  test: async (req, res, next) => {
    console.log(req);
    try {
      const reg = {
        message: "user",
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      const reg = await models.history.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
