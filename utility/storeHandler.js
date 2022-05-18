const fs = require("fs/promises");

module.exports = {
  // Función para acceder a los datos del storage, requiere de
  // writeStorage() para almacenar datos
  /*
  Constraints (Restricciones):
  - Regresa la información como un array array
  */
  openStorage: async (path, ext) => {
    try {
      const fileFromStorage = await fs.readFile(path + ext, {
        encoding: "utf8",
      });
      return Array.from(fileFromStorage);
    } catch (error) {
      console.error(error);
    }
  },
  // Función para escribir los datos del storage, complementa
  // openStorage()
  writeStorage: async (path, ext, content) => {
    try {
      await fs.writeFile(path + ext, content);
    } catch (error) {
      console.log(error);
    }
  },
  // Aumenta la dimensión de un array empaquetando items
  /*
  Constraints (Restricciones):
  - Solo pensado para array
  */
  /*
  Alias: Zipper
  */
  dimensionIncreaser: (rawPlainData, dimension) => {
    let increasedData = [];
    let zippedData = [];
    rawPlainData.forEach((item) => {
      if (zippedData.length === dimension) {
        increasedData.push(zippedData);
        zippedData = [];
      }
      zippedData.push(item);
    });
    return increasedData;
  },
  // Disminuye las dimensiones de un array
  /*
  Constraints (Restricciones):
  - Solo pensado para array
  - Reduce hasta un maximo de 1 dimensión
  - No esta pensado para reducir más de una dimensión por vez
  */
  /*
  Alias: Flatter
  */
  dimensionReducer: (rawData) => {
    let reducedData = [];
    rawData.forEach((item) => {
      try {
        reducedData.push(...item);
      } catch (error) {
        reducedData.push(item);
      }
    });
    return reducedData;
  },
  // Encuentra un campo dentro de un array de json
  /*
  Constraints (Restricciones):
  - Solo pensado para array de 1 dimensión
  */
  /*
  Hints / Tips:
  - User el dimensionReducer() para llevar un array a 1
  - Sirve para borrar y actualizar información del data storage
  */
  fieldFinder: (rawData, field, query) => {
    const constranits = (element, field, query) =>
      element[`${field}`] === query;

    return rawData.findIndex((element) => constranits(element, field, query));
  },
};
