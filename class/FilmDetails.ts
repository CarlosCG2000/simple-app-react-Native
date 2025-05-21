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
