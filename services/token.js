const jwt = require("jsonwebtoken");
const models = require("../models");

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        id: user.dni,
        tipo: user.tipo,
        correo: user.correo,
        username: user.usuario,
        password: user.password,
        direccion: user.direccion,
        temas: user.Temaliterario,
      },
      "config.secret",
      {
        expiresIn: 3600,
      }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      let { id } = await jwt.verify(token, "config.secret");
      let Usuario = await models.Usuario.findOne({
        where: {
          id: id,
        },
      });
      if (Usuario) {
        return Usuario;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
};
