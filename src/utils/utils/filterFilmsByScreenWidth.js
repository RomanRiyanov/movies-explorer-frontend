export const filterFilmsByScreenWidth = (movies, width, count) => {

    const initialMovies = movies;
    if (width > 1180) {
        return initialMovies.slice(0, 12 + count)
    }
    else if (width <= 1180 && width > 767) {
        return initialMovies.slice(0, 8 + count)
    }
    else if (width <= 767) {
        return initialMovies.slice(0, 5 + count)
    }
}
// 12
// 8
// 5