const tokenService = require("../services/token");

module.exports = {
  test: async (req, res, next) => {
    try {
      //Acá se ha de hacer una función que vaya a los registros de usuario y valide si el registro existe
      if (req.body.name === "Admin" && req.body.password === "123") {
        // Acá se crean las respuestas usando el servicios, todos los registros tiene que tener la estructura de abajo
        let tokenReturn = await tokenService.encode(
          // Acá es donde ser cargan los archivos
          {
            permission: 1,
            mail: "",
            address: "",
            user_account: "Admin",
            password: "",
            news_feed: false,
            preferences: [],
          }
        );
        // Si el tipo de usuario no es Administrador se debería de responder auth false
        res.status(200).json({ auth: true, tokenReturn });
      }
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
