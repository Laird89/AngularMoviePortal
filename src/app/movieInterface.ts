export interface Movie{
    title: string;
    description: string;
    posterUrl: string;
}

export interface MovieCategory{
    title: string;
    description: string;
    movies: Movie[];
}