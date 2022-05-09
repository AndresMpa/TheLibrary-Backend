const jwt = require("jsonwebtoken");
const models = require("../models");

//Modelo a usar para usuarios

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
  // Generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        type: user.permission,
        email: user.mail,
        address: user.address,
        username: user.user_account,
        password: user.password,
        feed: user.news_feed,
        preferences: user.preferences,
      },
      "config.secret",
      {
        expiresIn: 3600,
      }
    );
    return token;
  },
  // Permite decodificar el token
  decode: async (token) => {
    try {
      let { id } = await jwt.verify(token, "config.secret");
      let user = await models.user.findOne({
        where: {
          id: id,
        },
      });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
};
