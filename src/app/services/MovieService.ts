import { Movie, MovieCategory } from '../movieInterface';
import movieData from '../../assets/data/movie.json';

export class MovieService{
    actionMovies: Movie[] = movieData.action.movies;
    thrillerMovies: Movie[] = movieData.thriller.movies;
    thrillerCategory: MovieCategory = movieData.thriller;
    actionCategory: MovieCategory = movieData.action;
    getActionMovies() : Movie[]{
        return this.actionMovies;
    }

    getThrillerMovies() : Movie[]{
        return this.thrillerMovies;
    }

    getThrillerCategory() : MovieCategory{
        return this.thrillerCategory;
    }

    getActionCategory() : MovieCategory{
        return this.actionCategory;
    }
}