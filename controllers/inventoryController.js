const util = require("../utility/storeHandler");
const storage = `${process.cwd()}/dataStorage/inventory`;

module.exports = {
  rawList: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      res.status(200).json(file);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  addInventory: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let newFile = file.push(req.body.item);
      util.writeStorage(storage, newFile);
      const reg = {
        message: `Se agrego ${req.body.issn} al inventario`,
      };
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  updateInventory: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let index = util.fieldFinder(file, "issn", req.body.data.issn);
      file[index] = req.body.data;

      util.writeStorage(storage, file);
      const reg = {
        message: `Se modifico el registro ${req.body.issn}`,
      };
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
