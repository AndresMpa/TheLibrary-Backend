module.exports = {
  all: async (req, res, next) => {
    try {
      const reg = [
        {
          date: "27/Mar/2002",
          status: "green",
          title: "El colonel no tiene quien le escriba",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Completa",
        },
        {
          date: "8/Octubre/2008",
          status: "red",
          title: "Como torturar estudiantes",
          author: "Andrés Felipe Gamboa",
          method: "Visa",
          delivery: "Cancelado",
        },
        {
          date: "2/Abril/2012",
          status: "blue",
          title: "100 años de soledad",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Regresado",
        },
        {
          date: "27/Mar/2013",
          status: "green",
          title: "El colonel no tiene quien le escriba, edición premium",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Completa",
        },
        {
          date: "27/Mar/2022",
          status: "purple",
          title: "Sombras de mi adios",
          author: "Desconocido",
          method: "Master Card",
          delivery: "Reservado",
        },

      ];
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
      const reg = [
        {
          date: "8/Octubre/2008",
          status: "red",
          title: "Como torturar estudiantes",
          author: "Andrés Felipe Gamboa",
          method: "Visa",
          delivery: "Cancelado",
        },
      ];
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
      const reg = [
        {
          date: "27/Mar/2002",
          status: "green",
          title: "El colonel no tiene quien le escriba",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Completa",
        },
        {
          date: "27/Mar/2013",
          status: "green",
          title: "El colonel no tiene quien le escriba, edición premium",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Completa",
        },
      ];
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  returned: async (req, res, next) => {
    try {
      const reg = [
        {
          date: "2/Abril/2012",
          status: "blue",
          title: "100 años de soledad",
          author: "Gabriel Garcia Marquez",
          method: "Master Card",
          delivery: "Regresado",
        },
      ];
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
      const reg = [
        {
          date: "27/Mar/2022",
          status: "purple",
          title: "Sombras de mi adios",
          author: "Desconocido",
          method: "Master Card",
          delivery: "Reservado",
        },
      ];
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
      const reg = {
        message: "created",
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
