const tokenService = require("../services/token");

module.exports = {
  signin: async (req, res, next) => {
    try {
      //Acá se ha de hacer una función que vaya a los registros de usuario y valide si el registro existe
      if (req.body.name === "admin" && req.body.password === "123") {
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

      //Acá se ha de hacer una función que vaya a los registros de usuario y valide si el registro existe
      if (req.body.name === "user" && req.body.password === "123") {
        // Acá se crean las respuestas usando el servicios, todos los registros tiene que tener la estructura de abajo
        let tokenReturn = await tokenService.encode(
          // Acá es donde ser cargan los archivos
          {
            permission: 0,
            mail: "testtis@gmail.com",
            address: "Entre 2 tierras, Wualby M 33 C 12 bis 42",
            user_account: "Test man",
            password: "",
            news_feed: true,
            preferences: ["Horror"],
          }
        );
        // Si el tipo de usuario no es Administrador se debería de responder auth false
        res.status(200).json({ auth: false, tokenReturn });
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
};
