const models = require("../models");
const bcrypt = require("bcryptjs");
const tokenService = require("../services/token.js");

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
  createAccount: async (req, res, next) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const reg = await db.user.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
  signin: async (req, res, next) => {
    try {
      let userData = await db.user.findOne({
        where: { user_account: req.body.name },
      });
      if (userData) {
        let passwordIsValid = bcrypt.compareSync(
          req.body.password,
          userData.password
        );
        console.log(passwordIsValid);
        if (passwordIsValid) {
          let tokenReturn = await tokenService.encode(userData);
          res.status(200).send({ auth: true, tokenReturn });
        } else {
          res.status(401).send({
            auth: false,
            accessToken: null,
            reason: "Clave incorrecta",
          });
        }
      } else {
        res.status(404).send("No se encontro el usuario.");
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error " + e,
      });
      next(e);
    }
  },
};
