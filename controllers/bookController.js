const levenshtein = require("fast-levenshtein");
const util = require("../utility/storeHandler");
const storage = `${process.cwd()}/dataStorage/books`;

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
  list: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      const reg = util.dimensionIncreaser(file, 10);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  top: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let top = util.orderByFiled(file, "rating");
      res.status(200).json(top.slice(0, 4));
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  getABook: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let top = util.orderByFiled(file, "rating");
      res.status(200).json([top[req.body.item]]);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      req.body.buying.forEach((item) => {
        let index = util.fieldFinder(file, "issn", item.issn);
        file.splice(index, 1);
      });
      util.writeStorage(file, storage);
      const reg = {
        message: `Proceso de eliminación completo`,
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  addBook: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      file.push(req.body.item);
      util.writeStorage(file, storage);
      const reg = {
        message: `Ejemplar ${req.body.issn} creado`,
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  searchBook: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      const reg = [];
      file.forEach((item) => {
        if (levenshtein.get(req.body.query, item["title"]) >= 3) {
          reg.push(item);
        }
      });
      if (reg.length > 0) {
        util.dimensionIncreaser(found, 10);
        res.status(200).json(reg);
      } else {
        res.status(404).json({
          message: "No matches",
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
