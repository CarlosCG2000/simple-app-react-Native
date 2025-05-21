import mockFilms from "./films.json"; // Si estás usando un bundler moderno (Webpack 5+)
// const mockFilms = require("./films.json");  // Si estás usando un bundler más antiguo (Webpack 4 o inferior)

export async function getFilms() {
  const LATEST_FILMS = "https://omdbapi.com/?apikey=e6a1348e&s=sim"; // búsqueda por titulo 'sim'

  const rawData = await fetch(LATEST_FILMS);
  const json = await rawData.json();

  if (!json.Search) {
    console.error("No se encontraron resultados:", json);
    return [];
  }

  const { Search } = json;

  return Search.map((item) => {
    const { Title, Year, imdbID, Type, Poster } = item;
    const score = 80;

    return {
      description: Type,
      releaseDate: Year,
      score,
      slug: imdbID,
      title: Title,
      image: Poster,
    };
  });
}

export async function getFilmDetails(slug) {
  const FILM_DETAILS = `https://www.omdbapi.com/?i=${slug}&apikey=e6a1348e&y=2000`;

  const rawData = await fetch(FILM_DETAILS);
  const json = await rawData.json();

  if (json.Response === "False") {
    console.error("Error en la respuesta:", json.Error);
    return null;
  }

  const {
    Title,
    Plot,
    Poster,
    Ratings,
    Metascore,
    imdbID,
    // Year,
    // Released,
    // Runtime,
    // Genre,
    // Director,
    // Writer,
    // Actors,
    // Language,
    // Country,
    // Awards,
    // imdbRating,
    // imdbVotes,
    // Type,
    // BoxOffice,
  } = json;

  console.log("[getFilmDetails] El rating es:", Ratings);

  return {
    img: Poster,
    title: Title,
    slug: imdbID,
    description: Plot,
    score: Metascore,
    reviews: Ratings,
  };
}

export async function getFilmsMock() {
  const json = mockFilms; // directamente el objeto importado

  if (!json.Search) {
    console.error("No se encontraron resultados:", json);
    return [];
  }

  return json.Search.map((item) => {
    const { Title, Year, imdbID, Type, Poster } = item;
    const score = Math.floor(Math.random() * 100) + 1;

    return {
      description: Type,
      releaseDate: Year,
      score,
      slug: imdbID,
      title: Title,
      image: Poster,
    };
  });
}
