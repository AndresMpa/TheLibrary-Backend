//Middleware de autenticacion;
const tokenService = require("../services/token");

module.exports = {
  verifyUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (
      response.tipo === "1" ||
      response.tipo === "2" ||
      response.tipo === "3"
    ) {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyAdmin: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.tipo === "2") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyClient: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.tipo === "1") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
};
