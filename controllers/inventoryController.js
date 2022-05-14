const models = require("../models");

// Modelo a usar
/*
    issn: DataTypes.STRING,
    language: DataTypes.STRING,
    state: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    reserved: DataTypes.BOOLEAN
*/

module.exports = {
  test: async (req, res, next) => {
    try {
      const reg = {
        message: "inventory",
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
