const storage = `${process.cwd()}/dataStorage/story`;
const util = require("../utility/storeHandler");

// Utilidades para el controlador
const getNextStatus = (status) => {
  const avalibleStatus = {
    Cancelado: "red",
    Entregado: "green",
    Enviado: "blue",
    Reservado: "purple",
  };
  let currentIndex = Object.keys(avalibleStatus).indexOf(status) + 1;
  if (currentIndex > 3) {
    currentIndex = 0;
  }
  let key = Object.keys(avalibleStatus)[currentIndex];
  let value = avalibleStatus[key];
  return [key, value];
};

module.exports = {
  rawList: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let reg = [];
      file.forEach((register) => {
        register["story"].forEach((item) => {
          item.user = register["user"];
          reg.push(item);
        });
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
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
      if (user === -1) {
        file.push({
          user: req.body.username,
          story: [],
        });
      }
      user = file.length;
      req.body.items.forEach((item) => {
        item.date = util.getDate();
        item.address = req.body.address
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
  updateStory: async (req, res, next) => {
    try {
      let file = await util.openStorage(storage);
      let user = util.fieldFinder(file, "user", req.body.username);
      let index = util.fieldFinder(file[user]["story"], "issn", req.body.issn);
      let nextStatus = getNextStatus(req.body.status);
      file[user]["story"][index]["delivery"] = nextStatus[0];
      file[user]["story"][index]["status"] = nextStatus[1];
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
