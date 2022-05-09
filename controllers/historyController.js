const models = require("../models");

// Modelo a usar
/*
    id_inventory: DataTypes.STRING,
    cc: DataTypes.STRING,
    purchased: DataTypes.BOOLEAN
*/

module.exports = {
  test: async (req, res, next) => {
    console.log(req);
    try {
      const reg = {
        message: "history",
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
