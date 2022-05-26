const util = require("../utility/storeHandler");
const storage = `${process.cwd()}/dataStorage/news`;

module.exports = {
  list: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      const reg = util.dimensionIncreaser(file, 6);
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
      let file = await util.openStorage(storage);
      file.push(req.body);
      util.writeStorage(file, storage);
      const reg = {
        message: "Creado exitosamente"
      }
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
