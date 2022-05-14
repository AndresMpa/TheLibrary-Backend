const models = require("../models");

// Modelo a usar
/*
    id_inventory: DataTypes.STRING,
    news_title: DataTypes.STRING,
    description: DataTypes.STRING,
    removed_at: DataTypes.DATE
*/

module.exports = {
  test: async (req, res, next) => {
    try {
      const reg = [
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],

        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],

        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
        [
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
          {
            icon: "mdi-lock",
            color: "deep-purple accent-4",
            content:
              "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
          },
        ],
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
      const reg = await models.history.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
