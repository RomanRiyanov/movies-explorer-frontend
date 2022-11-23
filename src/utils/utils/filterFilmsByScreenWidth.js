import { moviesOnPage1320, moviesOnPage1180, moviesOnPage767 } from "../constants/constants";

export const filterFilmsByScreenWidth = (movies, width, count) => {
    // if (movies) {
        const initialMovies = movies;
    if (width > 1180) {
        return initialMovies.slice(0, moviesOnPage1320 + count)
    }
    else if (width <= 1180 && width > 767) {
        return initialMovies.slice(0, moviesOnPage1180 + count)
    }
    else if (width <= 767) {
        return initialMovies.slice(0, moviesOnPage767 + count)
    }
// } return [];
}