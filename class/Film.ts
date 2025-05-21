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