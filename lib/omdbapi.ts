import mockFilms from "./films.json"; // Si estás usando un bundler moderno (Webpack 5+)
// const mockFilms = require("./films.json");  // Si estás usando un bundler más antiguo (Webpack 4 o inferior)

export class Film {
  title: string;
  year: string;
  id: string;
  type: string;
  poster: string;
  score: number;

  constructor(data: {
    Title: string; Year: string; imdbID: string;
    Type: string; Poster: string;
  }) {
    this.title = data.Title;
    this.year = data.Year;
    this.id = data.imdbID;
    this.type = data.Type;
    this.poster = data.Poster;
    this.score = 80 // Math.floor(Math.random() * 100) + 1; // Generar un score aleatorio entre 1 y 100
  }
}

export async function getFilms(): Promise<Film[]> { // al ser async devuelve un Promise

  const LATEST_FILMS = "https://omdbapi.com/?apikey=e6a1348e&s=sim";

  try {
    const response = await fetch(LATEST_FILMS);
    const json = await response.json();

    if (!json.Search || !Array.isArray(json.Search)) {
      console.error("No se encontraron resultados válidos:", json);
      return [];
    }

    return json.Search.map((item: any) => new Film(item));

    // return json.Search.map((item: any) => {
    //   const film = new Film(item);

    //   return {
    //     title: film.title,
    //     releaseDate: film.year,
    //     slug: film.id,
    //     image: film.poster,
    //     description: film.type,
    //     score: 80,
    //   };
    // });

  } catch (error) {
    console.error("Error al obtener datos de la API:", error)
    return [];
  }
}

export async function getFilmsMock(): Promise<Film[]> {

  try {
    const json = mockFilms; // directamente el objeto importado

    if (!json.Search || !Array.isArray(json.Search)) {
      console.error("No se encontraron resultados válidos:", json);
      return [];
    }

    return json.Search.map((item: any) => new Film(item));

  } catch (error) {
    console.error("Error al obtener datos del mock:", error)
    return [];
  }

}

export class FilmDetails {
    title: string;
    plot: string;
    poster: string;
    ratings: Array<{ Source: string; Value: string }>;
    metascore: string;
    id: string;
    // Year, Released, Runtime, Genre, Director, Writer,
    // Actors, Language, Country, Awards, imdbRating,
    // imdbVotes, Type, BoxOffice

    constructor(title: string, plot: string, poster: string,
                ratings: Array<{ Source: string; Value: string }>,
                metascore: string, id: string
    ) {
      this.title = title;
      this.plot = plot;
      this.poster = poster;
      this.ratings = ratings;
      this.metascore = metascore;
      this.id = id;
    }
}

export async function getFilmDetails(slug: string): Promise<FilmDetails | null > {
  const FILM_DETAILS = `https://www.omdbapi.com/?i=${slug}&apikey=e6a1348e&y=2000`;

  try {
    const rawData = await fetch(FILM_DETAILS);
    const json = await rawData.json();

    if (json.Response === "False") {
      console.error("Error en la respuesta:", json.Error);
      return null;
    }

    const film = new FilmDetails( json.Title, json.Plot, json.Poster, json.Ratings, json.Metascore, json.imdbID );

    return film;
  } catch (error) {
    console.error("Error al obtener detalles:", error);
    return null;
  }
}