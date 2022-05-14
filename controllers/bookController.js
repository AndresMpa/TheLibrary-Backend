const models = require("../models");

// Modelo a usar
/*
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    number_pages: DataTypes.INTEGER,
    editorial: DataTypes.STRING,
    published: DataTypes.DATE
*/

module.exports = {
  test: async (req, res, next) => {
    try {
      const reg = [
        [
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
        ],
        [
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
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
      const reg = await models.Book.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    console.log(req);
    try {
      const reg = await models.Book.findAll();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
