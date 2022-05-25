const storage = `${process.cwd()}/dataStorage/story`;
const util = require("../utility/storeHandler");

module.exports = {
  all: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      const reg = file[user]["story"];
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  cancelled: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      const reg = file[user]["story"].filter((item) => item.status === "red");
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  delivered: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      const reg = file[user]["story"].filter((item) => item.status === "green");
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  purchased: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      const reg = file[user]["story"].filter((item) => item.status === "blue");
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  reserves: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      const reg = file[user]["story"].filter(
        (item) => item.status === "purple"
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  addStory: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      console.log(req.body);
      
      req.body.items.forEach((item) => {
        item.date = util.getDate();
        item.method = "Contra envio";
        item.delivery = "Enviado";
        item.status = "blue";
        file[user]["story"].push(item);
      });

      util.writeStorage(file, storage);
      const reg = {
        message: `Historial actualizado`,
      };
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
