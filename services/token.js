const jwt = require("jsonwebtoken");

module.exports = {
  // Generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        type: user.permission,
        email: user.mail,
        address: user.address,
        username: user.user_account,
        feed: user.news_feed,
        preferences: user.preferences,
        profile: user.profile,
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
