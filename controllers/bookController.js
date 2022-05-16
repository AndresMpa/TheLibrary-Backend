module.exports = {
  /*
  Estos son los campos que debería de contener cada ejemplar
    title
    author
    year
    genre
    pages
    editorial
    issn
    language
    release
    status
    price
    discount
    summary
    asset
    rating
    voter
  */
  rawList: async (req, res, next) => {
    try {
      const reg = [
        {
          rating: 4.5,
          votes: 450,
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "4317-8478",
          price: 80000,
          discount: 0.2,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: 5078,
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "1317-8472",
          price: 60000,
          discount: 0.2,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: 453,
          title: "Yo antes de ti",
          author: "Marie DeSanint Lodico",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-6481",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: 5172,
          title: "El niño de pijama de rayas",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8451",
          price: 20000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.2,
          votes: 45,
          title: "El hombre más listo del mundo",
          author: "Igor Patkstico",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0217-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: 378,
          title: "Familia Baum",
          author: "Marie L. Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "5317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 3.5,
          votes: 50,
          title: "Cocina en cabezas de ajo",
          author: "Hercules Di Modesmoss",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "3100-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/11/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset: "https://picsum.photos/id/10/500/300",
          issn: "0317-8471",
          price: 120000,
          discount: 0.0,
          language: "Español",
          genre: "Fantasia",
          release: 1854,
          year: 1980,
          pages: 250,
          editorial: "Atenea",
          status: "Bueno",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
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
  list: async (req, res, next) => {
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
  top: async (req, res, next) => {
    try {
      const reg = [
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Antologia de Terror",
          author: "LoveCraft",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Mago de oz el mundo perdido",
          author: "Oscar de la Frielda",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Como torturar estudiantes",
          author: "Felipe Castillo",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Caminar por las cuerdas de la vida, tomo 1",
          author: "Per Turnum",
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
  getABook: async (req, res, next) => {
    try {
      const top = [
        {
          asset:
            "https://librosenlinea.co/wp-content/uploads/2020/01/antologia.jpg",
          title: "Antologia de Terror",
          author: "LoveCraft",
          description:
            "Este libro es una guía exhaustiva para adentrarse en los siniestros bosques que alberga el alma del escritor, sus relatos expresan la soledad y la pequeñez de la condición humana en un universo infinito",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Mago de oz el mundo perdido",
          author: "Oscar de la Frielda",
          description:
            "Un colección de cuentos sobre diferentes historias de piratas muy rica en contenidos",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Como torturar estudiantes",
          author: "Felipe Castillo",
          description:
            "En este libro el doctor en tortura de Castillo nos enseña metodos modernos para la tortura psicologica y fisica de estudiantes de todas las edades",
        },
        {
          asset:
            "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          title: "Caminar por las cuerdas de la vida, tomo 1",
          author: "Per Turnum",

          description:
            "Siendo el primer todo del escritor Turnum este libro nos recibe con una serie de consejos sobre como ser mejores personas realizando un simil con una cuerda de tejer que la madre del doctor Turnum usa",
        },
      ];
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
};
