const levenshtein = require("fast-levenshtein");
const util = require("../utility/storeHandler");
const loader = require("../utility/BDloader")
const storege = `${process.cwd()}/dataStorage/books`

module.exports = {
  rawList: async (req, res, next) => {
    try {
      file = await util.openStorage(storege);
      res.status(200).json(loader.rawData());
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      file = await util.openStorage(storege);
      console.log(file);

      
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
      const reg = loader.top();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  getABook: async (req, res, next) => {
    try {
      const top = loader.bookList();
      const reg = [top[req.body.item]];
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = {
        message: `Item ${req.body.issn}`,
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
      const reg = {
        message: "AddBook",
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
      if (levenshtein.get(req.body.query, "El príncipe") >= 3) {
        let data = loader.rawData()[Math.floor(Math.random() * (0 - 8))]
        const reg =  util.dimensionIncreaser(data, 10);
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
