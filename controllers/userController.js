const storage = `${process.cwd()}/dataStorage/users`;
const tokenService = require("../services/token");
//const bcrypt = require("bcryptjs/dist/bcrypt");
const util = require("../utility/storeHandler");

module.exports = {
  signin: async (req, res, next) => {
    try {
      //Acá se ha de hacer una función que vaya a los registros de usuario y valide si el registro existe
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "userName", req.body.name);

      if (req.body.password === file[user]["password"]) {
        // Acá se crean las respuestas usando el servicios, todos los registros tiene que tener la estructura de abajo
        let tokenReturn = await tokenService.encode(
          // Acá es donde ser cargan los archivos
          {
            permission: file[user]["permission"],
            mail: file[user]["mail"],
            address: file[user]["address"],
            user_account: file[user]["userName"],
            news_feed: file[user]["news"],
            preferences: file[user]["preferences"],
            profile: file[user]["profile"],
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
      //req.body.password = bcrypt.hashSync(req.body.password, 8);
      console.log(`Agregar ${req.body.name} a los archivos`);
      const reg = {
        message: `Se agrego ${req.body.name}`,
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
};
