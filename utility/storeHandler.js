const fs = require("fs/promises");

// Recoge los json para regresar un array de una dimensión con
// la información del JSON
const fileFormatter = (rawData) => {
  let jsonFormattedData = JSON.parse(rawData);
  return Object.keys(jsonFormattedData).map((item) => jsonFormattedData[item]);
};

module.exports = {
  // Función para acceder a los datos del storage, requiere de
  // writeStorage() para almacenar datos
  /*
  Constraints (Restricciones):
  - Regresa la información como un array array
  */
  openStorage: async (path, ext = "json") => {
    try {
      let fileFromStorage = await fs.readFile(`${path}.${ext}`);
      return fileFormatter(fileFromStorage);
    } catch (error) {
      console.error(error);
    }
  },
  // Función para escribir los datos del storage, complementa
  // openStorage()
  writeStorage: async (path, ext = "json", content) => {
    try {
      await fs.writeFile(`${path}.${ext}`, JSON.stringify(content));
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
  dimensionIncreaser: (rawPlainData, dimensionSize) => {
    let increasedData = [];
    let zippedData = [];
    rawPlainData.forEach((item) => {
      if (zippedData.length === dimensionSize) {
        increasedData.push(zippedData);
        zippedData = [];
      }
      zippedData.push(item);
    });

    if (zippedData.length < dimensionSize) {
      increasedData.push(zippedData);
    }
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
  // Order data inside an array of JSON using a numeric field as
  // discriminant
  /*
  Hint / Tips:
  - "a" means ascendining sort
  */
  orderByFiled: (data, field, order = "a") => {
    return order === "a"
      ? data.sort(
          (itemA, itemB) => parseFloat(itemB[field]) - parseFloat(itemA[field])
        )
      : data.sort(
          (itemA, itemB) => parseFloat(itemA[field]) - parseFloat(itemB[field])
        );
  },
};
